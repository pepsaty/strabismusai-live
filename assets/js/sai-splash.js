// SAI Splash JS
(function(){
  function qs(s,c){return (c||document).querySelector(s);}
  function hide(){
    var o=qs('#saiSplashOverlay'); if(!o) return;
    o.classList.add('hide');
    setTimeout(function(){ o.remove(); document.body.classList.remove('sai-no-scroll'); }, 420);
  }
  document.addEventListener('DOMContentLoaded', function(){
    var o=qs('#saiSplashOverlay'); if(!o) return;
    var v=qs('#saiSplashVideo', o); var skip=qs('#saiSplashSkip', o);
    document.body.classList.add('sai-no-scroll');
    if(skip) skip.addEventListener('click', hide, {passive:true});
    if(!v){ hide(); return; }
    // Autoplay muted inline
    v.muted = true; v.playsInline = true; v.setAttribute('playsinline','');
    var ended = false;
    v.addEventListener('ended', function(){ ended=true; hide(); }, {passive:true});
    v.addEventListener('error', hide, {passive:true});
    // Fallback timeout (video is ~1s; give 1.8s)
    setTimeout(function(){ if(!ended) hide(); }, 1800);
    var p = v.play();
    if(p && p.catch){ p.catch(function(){ hide(); }); }
  });
})();
