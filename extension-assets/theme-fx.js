/**
 * theme-fx.js - Shared Theme Effects Controller for Papa Yar Chrome Extension
 * Manages:
 * - html[data-fx="full | calm | off"] state & persistence (chrome.storage.local / localStorage)
 * - Automatic 'off' override when prefers-reduced-motion: reduce or data-motion="reduced" is active
 * - html[data-fx-paused] when document.hidden is true (visibilitychange)
 * - Single decorative container div.fx-layer[aria-hidden="true"] injected once into <body>
 * - SVG Optical Refraction Filters (#liquid-glass-lens, #liquid-droplet-lens) & Sliding Liquid Droplet Tab Pill (.fx-liquid-tab-pill)
 * - Lightweight pointer tracking (--fx-mx, --fx-my) & zero-reflow click/tab interaction hooks
 */
(function () {
  'use strict';

  var VALID_MODES = ['full', 'calm', 'off'];
  var STORAGE_KEY = 'papayar_fx_mode';
  var root = document.documentElement;
  var reducedMedia = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : { matches: false };

  var LIQUID_SVG_MARKUP = '<svg id="papayar-liquid-glass-svg" width="0" height="0" style="position:absolute;width:0;height:0;pointer-events:none;overflow:hidden;" aria-hidden="true"><defs><filter id="liquid-glass-lens" x="-12%" y="-12%" width="124%" height="124%" color-interpolation-filters="sRGB"><feImage href="data:image/png;base64,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" x="0%" y="0%" width="100%" height="100%" preserveAspectRatio="none" result="bezelMap"/><feTurbulence type="fractalNoise" baseFrequency="0.014 0.018" numOctaves="2" seed="11" result="liquidNoise"/><feGaussianBlur in="liquidNoise" stdDeviation="3.2" result="softLiquid"/><feBlend in="bezelMap" in2="softLiquid" mode="overlay" result="combinedMap"/><feDisplacementMap in="SourceGraphic" in2="combinedMap" scale="22" xChannelSelector="R" yChannelSelector="G" result="refracted"/><feSpecularLighting in="softLiquid" surfaceScale="3.5" specularConstant="0.75" specularExponent="65" lighting-color="#ffffff" result="specLight"><fePointLight x="-80" y="-120" z="180"/></feSpecularLighting><feComposite in="specLight" in2="SourceAlpha" operator="in" result="specClipped"/><feBlend in="refracted" in2="specClipped" mode="screen"/></filter><filter id="liquid-droplet-lens" x="-18%" y="-18%" width="136%" height="136%" color-interpolation-filters="sRGB"><feImage href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABICAYAAABx2P7CAAAOB0lEQVR42u2da1MbORaGH3XL7Rs3rzM4kACp/bCf9kfOT51kEjYzNVkuBtzui7QfjmTL7TaQ2QScIFWpIExV3Ew/ec9FR+eoX3/91fKES6Wg+kAPyMCmYBPieoZlDdgaKIAc1AxU/bTPoL/3ByQ90CNI9yHZBYZgB2A0mBRMArUCG3l4WviA2oIxYGowFdg74BaSKaRXoC8gyX9AANMMuoeQjUGPQe2AzcB0BLiqcv/y/I70Pc9Ssm0Gpg/VyAFZgi1A3YD+AtkX6P4JabHlAGa7MHgN/QnoAzGzRkOZQz2D+hrqWrYxzgRE+J6XPwVJAiRACnUKdKDqQHEIs38AJ6Avof8HDD5DNt0yALMh7L2B4THoXVA9KOZQXkNViOLVlUj9Aj7rACQq4LMBqByECSRqCaFKQWnZVQZlD26P4G4EV29geA57nyC7fWYAlYLRCRy8he5IwMtvYT6FsoC6FPhMBbX3NRx8xjr1i/A9O4SJAqOWEKrUfXUQJh1IMih6cDuGuyFcv4KDjzD6HZR9BgAH+/DqFPZegx5APoPZFMr5Er6FuXXghcoH7nsbGXwu8+u/sU4JCZXQg+gVsSNRcnIHeQ+ufxEQb/bh1QcYXD0hgOMjODyD/oHEEHcXMM8dfKWYWw9eXQtwC/iCTTS/W0GiCgISQiUMTXIBag4ql53kMBvAX2/gdgiH72H8nycA8PgMJqfQ3YHZTPY8h6KEypvcwNcLg41WAOPaDjVU6xDaZB1ESlAlMJc968PVCPIOzDM4fv+dAEwSOHkHkzfQ6cP0CmY5zJ3JrSoXbGwwuaG59fBFCLcDPhuqYAhjm0mu3C5BVQKjKmC6Ax9PoUzh5DdIzDcEMEng3TuYHEPagekl5LmLdL3yhapXuyDjHuWL8G0xhH4bp4ZJ8Gefu63kq62We7oD58fyn989EsJHAfjuBI4n8iDTK4FvPndm1yufWVe+MNLdBF/k8JnBuwdC5QIUY5wSGqeGHsQASOss33QI5xP52T/ffwMAz47hzQQ6KVxNnc9XOOWrWiJdp3xr8DnaYt5vu1My1n3FAxmmaayDzohPaN2frVmeKxsDV0P4NIG0hLPz/wPAozGcTqDfgctpw+xWq6caj1K+BnzRDG+P+fUvSCl5LypM0XgIrVNC925TswqgMXK+XBu43IEPE8jmcPTlbwC4P4CzQ9jpivJ5s9uEr94A3wLADcoXlXA7TfECQh+T2NXIeKGEwfbv27hdW9ixcDWA94cwmMH+3VcAqBScvoKDvpjc3JvdYl35bBDp3gtfANwadxHEZ8y/OOgar0E5C7VQxAaECjkBSSyk7p1rB2AXqCwUCi778OEV/HvDiUkrgCcjeL0njuRs1q58PtIN/b4wudwa7cZTj+1a9h4lDP68Eqw4GJMAYGshda6hBjpA10JfQd6Hz3uwP4LT/z4CwGEGbw9goOHiDnIX7ZZhnm9Djq814LhP+eLaTnMchMbKrprjRaRslsUMiTPZXgl9cNxTMAAuBvDxAMY3MCweAPDNHoy6kmTOgyTzopol8PlMw+fbFO3aaG5/KAJVI0hcMcPB+0tY5gotSxVMAyXsAf0ELrrwaQ/+9dfqx60Uw+9mcDwUcvMc5g3lawYctuWYjUaVy4oKRvh+DLNsV11ErPPf3NfFNm5bSTonRiLjtAZdQaeCbgm9HHIF50OYZvcA+HoAuxpuPXxli9ltmN7Fv5RNSeYI3g8NogrF0TaAJADRfV2A6CEsBcJhDlMNnwcbAMxSmPSd+hXulMOpnt/NgKMZ8dqYZvkpQWxCqGhXw8QGKui2riEroVeICv7RhyJtAfCwCwda0i1FCWW9Od3SLCxYgy2q3k9rlkMoVfi1RQnTWnbHQdgt4FLDn90WAMeZOIx5CF8j4FjA11S4RsQb2ftJU4Z2/fsFjKwrYegTdmrolZADX7JGFNxLYKxBGyiqlmSzbSmnajG7Eb4XkqJRgU8YHN0pFaghDsAgKs4UVAl80ZAn0DNOAUcadpSoX1VB5X0+20i1sJ5uif7eC/cLm2aY5QmJ36kRcdOVqOCNggsdmOD9FDLrUi5tBaWNgGNTPi8y+EJM8aYX3wxMAlOc1BKQdCooLFylAYC7CXSM8/2CiLetmDRMNNuofi9eBVXgE64oYQNCHxV3aigNTF30oVMFQ2evN/l9NC4RtZ1sRAZfmC/oX7pa9w9VEKwsqvsDf9AouEVasui+goFdTTjbliM2aLlCGamLqwGhCiAMrpasQKiBOwszBbqHOIi+UU3bvV1oKR6N8MXVAiEtEPqfqWQJYWUlJaMzxDbXrBcXLP7+BmzxMnlca4GJDSqrAwgXgYlywYiSqhnfFU6nzkmsWc/vxcLRuL5aCcNQuS1QcSX+NWJ1dWKlKeFadsU+/vPiigHJY8AIo2XrLK6OJMX1pOrYWLE5blzPuiKAcUUA43q5a7MPqOL/nLi+sw+oQBsrLRX8TXilHgh5HoqA4oqxhW3/2aKOwJdrpaD9CYiv5/IQKla7aK78xVEd43oMeGHRSqOLQgKkCSQFUv2S1svSGV/ZSnDxZEX5bGQwrlXu2k7LFhD6+gLfP6aW07cMN4ekCgAM4VON208Pa29cUfkaxSt2HcK6lvqDHpDMlFQm6GoVwqRR09WqfBHCuGy7EtpG06IQvqqSCqy+Al272izjbzG53IxKVv1AFUQdSjWO7FQMSF4kcxuu4Tb9vRC+2oncEEiVS8NME6lS7bgfpmodwsUO2zSEkhudwhdHYbMq3tJeRW+Cu+VlLdX3u74iGqQ+v7BSr6/Void1K4Qr+ZeYlolpl/CHG+DzfcOrWu4dZUruIeEY40LLTaVeKb6gdvX74c0m1XL7qfWeaFwvRv1oUz5Wm1Ua1zG1MuL75aXcwByFt+Jyd1ezMpBVy4BkJTJuQBheQgkfLFrin1z9GoXKYXK5aYJDv6+q5M65NnIHvZcEAILcVs8RFew4+NKg2UwStl6g/XZ8hPBlwNfWFWMBnwkal3rfrxbfLy8l9TIOOiMsAPyzK307uoX08VhA6FXQNPp/NPqDxN4wPzl9LR0w1lQvbNccqF9ZS7+heSH9hw7besMUqXQuypV0MspKuUgcdjpaU0K72RxHv/An9PfazK5dV76wo1rl4MsL6bw26UsntjUAQXq3TbX0cuuW0tstTFC3KSGBT8gmCCOIP6zqNeELo11oV74w4VyW0mvyNpfek68b/QFXWvROM+liObxbdrUs1WIq02JGiUUG2SmzLGAIn3uRjlGNS8zEfOGPlGdZ63j2QK4v9PmqSlIu81K67faUdN/dze4BEKSP76tr+OVaouM5ULKEMA1Fzd06No1kYNjeH4LJO9Es/1gMNoKOtSg3mJLg4TO19BOvKukvns+l3/gve9J/vLnWALzNpKP58E4GjMyBSi0V0FowqXsYFZRxJU79fMsugik8YbPr+H5/uFQLtHTIaMyH8SN6fbK5KAW+u5lMXHh7IBMYHgQQ4PcR7N/Am7+gP3Nm2LabYa96huVwO2ifMQEbTkuiWX52c/uQ8q1NRWqmW4J8X1lIxDubidl8PZLZM22rFUCrZLrN8BZGVzLxZgFg2D3BDazzx3V+ik44Y8zadeULfUSiWd66SLdtxFqzsmVlPlzdCDrm4vfNZjDal6lbmyrtN86K83O+OjnsTB2AtqV9R+AUmmQVQr8XStjsphRf/Xbwt6HLbbM7mtkQcLTBd3MDO27e4P5g82ffOy3zP2OZdnj6USCswyZGBqwWe2zTJYjGDTg2gQoSjAFttniNEG6RFW6JdlfgC81uvQ5fUchcwZtb6GcyafVofP/nPzgv+P2xzH09Pofh1MFXLyUYvZwb64sJ/VjPNQhVYzxoXFuphA8pn5+YtYh2nfLNcri9hawjA87Pjh/+zEdNTP/tRJzJyTkMr+QBbI2MRewE8PmJ2ulSCa0PTDZAGE3xdqhfWyXz2ilHHSSZa6hKd8TmzO7tDXQymEzg3cnjnuFRAJoEfnsnQcjkE+xcgt0BW4HtugShdjsA0SSsdigMJ3FHJdxO5WP9bHdF+ZzJ9dFuEfh8WR8mx3DyTsTnmwHoIXz/TyhTmHyAwRWoAlQfVM8pYUf+RpUG5jhpANhUwvj+t0IFNypfEOkaD59XPhfpzmYw2IHJKRyffd3n66994PMzmGdw+B76l9DPkZmcPVDOJNdOCT2INlTDRnQcc4DbkYJpO1qzAXi1O+EoSyjnDr47MX77Izg8g/HR13+8/jvP/OUIZgN49QH2PsPgAhKnhKoLZQaqA7UD0KQtJpnAN4zreQH0EG4wuXUNdSkmt3QmN5+BHsDoNbw6hcH+3/t4/Xef+24ffv+3JBoPPkL3AgZTyIcCoocQDUoHwUnCSqIa1ZIOiOtJTG9bx4IwyjV+apaDr8ghv5X3u/cLHLyF0ckD7Vy+F4Bewf57Cjdj2PsEw3PQU+hNIelC2QOVQaVXfcNFwjqJZngbzK9pXBoPCwqqAspcgg3Vg+EYhsew9way4f//CPpb/B7FEP76F1wfweAz9P8AfQn6GpLKmeYO1B0WwyJM4o7wYoHC86pgSwVzXUqgUeZgtAPvCPoTGLyGbPfbPYP+lr9QsSt7egbdPyH7AvoLqBtIZsC1a/vhghSbrtcTxvW06RdrV9MrJgHTEcvVPQQ9hmws36fZt38G/T1+sTqDu7eykxz0BaRXkEyBW7B3kkOUVunRAXy25QJClUGioTMAhpDsQroPegRJ7/s+gv7ev6PpQXEEuBBd1aBmyBW8YnmsF9fTs5cm0qOPzKXR+s5Pf8L1P24rEjw6OJa+AAAAAElFTkSuQmCC" x="0%" y="0%" width="100%" height="100%" preserveAspectRatio="none" result="dropletBezel"/><feTurbulence type="fractalNoise" baseFrequency="0.018 0.024" numOctaves="2" seed="23" result="dropletWave"/><feGaussianBlur in="dropletWave" stdDeviation="2.4" result="softDropletWave"/><feBlend in="dropletBezel" in2="softDropletWave" mode="overlay" result="dropletMap"/><feDisplacementMap in="SourceGraphic" in2="dropletMap" scale="30" xChannelSelector="R" yChannelSelector="G" result="dropletRefracted"/></filter></defs></svg>';

  function isMotionReduced() {
    return Boolean(reducedMedia.matches || root.dataset.motion === 'reduced');
  }

  function applyFxAttribute(requestedMode) {
    var mode = VALID_MODES.indexOf(requestedMode) !== -1 ? requestedMode : 'full';
    root.dataset.fxPref = mode;
    root.dataset.fx = isMotionReduced() ? 'off' : mode;
    updateToggleButtons(root.dataset.fx);
  }

  function updateToggleButtons(activeMode) {
    var btns = document.querySelectorAll('[data-fx-set]');
    for (var i = 0; i < btns.length; i++) {
      var b = btns[i];
      var on = b.getAttribute('data-fx-set') === activeMode;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }

  function saveFxMode(mode) {
    if (VALID_MODES.indexOf(mode) === -1) return;
    applyFxAttribute(mode);
    try {
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        var payload = {};
        payload[STORAGE_KEY] = mode;
        chrome.storage.local.set(payload);
      }
    } catch (e) {}
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch (e) {}
  }

  function loadInitialFxMode() {
    var urlFx = null;
    try {
      urlFx = new URLSearchParams(location.search).get('fx');
    } catch (e) {}
    if (urlFx && VALID_MODES.indexOf(urlFx) !== -1) {
      applyFxAttribute(urlFx);
      return;
    }
    var initial = root.getAttribute('data-fx') || 'full';
    try {
      var savedLocal = localStorage.getItem(STORAGE_KEY);
      if (savedLocal && VALID_MODES.indexOf(savedLocal) !== -1) {
        initial = savedLocal;
      }
    } catch (e) {}
    applyFxAttribute(initial);

    try {
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        chrome.storage.local.get([STORAGE_KEY], function (res) {
          if (res && res[STORAGE_KEY] && VALID_MODES.indexOf(res[STORAGE_KEY]) !== -1) {
            applyFxAttribute(res[STORAGE_KEY]);
          }
        });
      }
    } catch (e) {}
  }

  function ensureLiquidSvgDefs() {
    if (!document.body) return;
    if (document.getElementById('papayar-liquid-glass-svg')) return;
    var wrap = document.createElement('div');
    wrap.innerHTML = LIQUID_SVG_MARKUP;
    if (wrap.firstChild) {
      document.body.insertBefore(wrap.firstChild, document.body.firstChild);
    }
  }

  function ensureFxLayer() {
    if (!document.body) return null;
    ensureLiquidSvgDefs();
    var existing = document.querySelector('.fx-layer');
    if (existing) return existing;
    var layer = document.createElement('div');
    layer.className = 'fx-layer';
    layer.setAttribute('aria-hidden', 'true');
    layer.innerHTML =
      '<div class="fx-ambient-a"></div>' +
      '<div class="fx-ambient-b"></div>' +
      '<div class="fx-ambient-c"></div>' +
      '<div class="fx-cursor-follower"></div>' +
      '<div class="fx-click-burst"></div>';
    document.body.appendChild(layer);
    return layer;
  }

  var lastTabIdx = -1;
  var morphToggle = false;
  var morphTimer = 0;

  function ensureLiquidTabPill() {
    var nav = document.querySelector('.nav-tabs-bar');
    if (!nav) return null;
    var pill = nav.querySelector('.fx-liquid-tab-pill');
    if (!pill) {
      pill = document.createElement('div');
      pill.className = 'fx-liquid-tab-pill';
      pill.setAttribute('aria-hidden', 'true');
      pill.innerHTML = '<div class="fx-liquid-tab-lens"><div class="fx-liquid-tab-glint"></div></div>';
      nav.insertBefore(pill, nav.firstChild);
    }
    return pill;
  }

  function syncLiquidTabPill(targetBtn, shouldAnimate) {
    var nav = document.querySelector('.nav-tabs-bar');
    if (!nav) return;
    var pill = ensureLiquidTabPill();
    var tabs = nav.querySelectorAll('.nav-tab-item');
    if (!tabs.length) return;

    var activeBtn = targetBtn || nav.querySelector('.nav-tab-item.active') || tabs[0];
    var newIdx = 0;
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i] === activeBtn) {
        newIdx = i;
        break;
      }
    }

    var x = activeBtn.offsetLeft;
    var y = activeBtn.offsetTop;
    var w = activeBtn.offsetWidth;
    var h = activeBtn.offsetHeight;

    nav.style.setProperty('--pill-x', x + 'px');
    nav.style.setProperty('--pill-y', y + 'px');
    nav.style.setProperty('--pill-w', w + 'px');
    nav.style.setProperty('--pill-h', h + 'px');

    if (shouldAnimate && newIdx === lastTabIdx) {
      return;
    }

    var dist = lastTabIdx === -1 ? 1 : Math.max(1, Math.abs(newIdx - lastTabIdx));
    var dir = lastTabIdx === -1 ? 1 : (newIdx > lastTabIdx ? -1 : 1);
    lastTabIdx = newIdx;

    nav.style.setProperty('--morph-dist', String(dist));
    nav.style.setProperty('--morph-dir', String(dir));

    if (shouldAnimate && root.dataset.fx !== 'off' && pill) {
      morphToggle = !morphToggle;
      pill.classList.remove('is-morphing-a', 'is-morphing-b');
      pill.classList.add('is-morphing', morphToggle ? 'is-morphing-a' : 'is-morphing-b');
      nav.classList.add('is-liquid-recoil');
      clearTimeout(morphTimer);
      morphTimer = setTimeout(function () {
        pill.classList.remove('is-morphing', 'is-morphing-a', 'is-morphing-b');
        nav.classList.remove('is-liquid-recoil');
      }, 560);
    }
  }

  function syncVisibilityPause() {
    if (document.hidden) {
      root.setAttribute('data-fx-paused', '');
    } else {
      root.removeAttribute('data-fx-paused');
    }
  }

  function bindInteractions() {
    ensureFxLayer();
    ensureLiquidTabPill();
    syncLiquidTabPill(null, false);
    updateToggleButtons(root.dataset.fx || 'full');

    window.addEventListener('resize', function () {
      syncLiquidTabPill(null, false);
    }, { passive: true });

    // Pointer tracking (throttled via rAF)
    var rafId = 0;
    var lastX = 175;
    var lastY = 220;
    document.addEventListener('pointermove', function (e) {
      if (root.dataset.fx === 'off' || document.hidden) return;
      lastX = e.clientX;
      lastY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(function () {
          rafId = 0;
          root.style.setProperty('--fx-mx', lastX + 'px');
          root.style.setProperty('--fx-my', lastY + 'px');
          var pctX = Math.round((lastX / (window.innerWidth || 350)) * 100);
          var pctY = Math.round((lastY / (window.innerHeight || 700)) * 100);
          root.style.setProperty('--fx-mx-pct', pctX + '%');
          root.style.setProperty('--fx-my-pct', pctY + '%');
        });
      }
    }, { passive: true });

    // Click effects on buttons, chips, and Liquid Glass Tab Switcher
    var clickRafId = 0;
    document.addEventListener('click', function (e) {
      var fxToggle = e.target.closest ? e.target.closest('[data-fx-set]') : null;
      if (fxToggle) {
        saveFxMode(fxToggle.getAttribute('data-fx-set'));
        return;
      }

      var tabBtn = e.target.closest ? e.target.closest('.nav-tab-item') : null;
      if (tabBtn) {
        syncLiquidTabPill(tabBtn, true);
      }

      if (root.dataset.fx === 'off') return;
      var btn = e.target.closest ? e.target.closest('button, .v-chip, .file-import-link') : null;
      if (!btn) return;

      var isTabBtn = Boolean(tabBtn);
      var bx = e.clientX;
      var by = e.clientY;
      if (!bx && !by) {
        var rect = btn.getBoundingClientRect();
        bx = rect.left + rect.width / 2;
        by = rect.top + rect.height / 2;
      }

      var burst = document.querySelector('.fx-click-burst');
      var parentCard = (btn.classList.contains('btn-delete-acc') || btn.classList.contains('btn-crimson'))
        ? btn.closest('.saved-account-card, .card')
        : null;

      if (!isTabBtn) {
        btn.classList.remove('is-fx-clicked');
      }
      if (parentCard) {
        parentCard.classList.remove('is-fx-alert');
      }
      if (burst) {
        burst.classList.remove('is-bursting');
        burst.style.setProperty('--burst-x', bx + 'px');
        burst.style.setProperty('--burst-y', by + 'px');
      }

      if (clickRafId) cancelAnimationFrame(clickRafId);
      clickRafId = requestAnimationFrame(function () {
        clickRafId = 0;
        if (!isTabBtn) {
          btn.classList.add('is-fx-clicked');
          clearTimeout(btn._fxClickTimer);
          btn._fxClickTimer = setTimeout(function () {
            btn.classList.remove('is-fx-clicked');
          }, 650);
        }
        if (parentCard) {
          parentCard.classList.add('is-fx-alert');
          clearTimeout(parentCard._fxAlertTimer);
          parentCard._fxAlertTimer = setTimeout(function () {
            parentCard.classList.remove('is-fx-alert');
          }, 600);
        }
        if (burst) {
          burst.classList.add('is-bursting');
        }
      });
    });

    // Listen for gallery postMessage commands (fx mode & tab changes)
    window.addEventListener('message', function (e) {
      if (!e.data) return;
      if (e.data.pyFx && VALID_MODES.indexOf(e.data.pyFx) !== -1) {
        saveFxMode(e.data.pyFx);
      }
      if (e.data.pyTab) {
        var target = document.querySelector('.nav-tab-item[data-tab="' + e.data.pyTab + '"]');
        if (target) {
          syncLiquidTabPill(target, true);
        }
      }
    });
  }

  // Watch data-motion & data-theme attribute changes on <html>
  if (typeof MutationObserver !== 'undefined') {
    var mo = new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) {
        if (mutations[i].attributeName === 'data-motion') {
          applyFxAttribute(root.dataset.fxPref || root.dataset.fx || 'full');
        } else if (mutations[i].attributeName === 'data-theme') {
          requestAnimationFrame(function () {
            syncLiquidTabPill(null, false);
          });
        }
      }
    });
    mo.observe(root, { attributes: true, attributeFilter: ['data-motion', 'data-theme'] });
  }

  if (reducedMedia && reducedMedia.addEventListener) {
    reducedMedia.addEventListener('change', function () {
      applyFxAttribute(root.dataset.fxPref || 'full');
    });
  }

  document.addEventListener('visibilitychange', syncVisibilityPause);
  loadInitialFxMode();
  syncVisibilityPause();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindInteractions);
  } else {
    bindInteractions();
  }

  if (typeof globalThis !== 'undefined') {
    globalThis.PapaYarFX = {
      setMode: saveFxMode,
      getMode: function () { return root.dataset.fx || 'full'; },
      syncTabPill: syncLiquidTabPill
    };
  }
})();
