// ======================
// FLOAT ADS ATAS 728x90
// ======================
document.write('<div id="floatads" style="width:100%;margin:auto;text-align:center;float:none;overflow:hidden;position:fixed;top:0;left:0;z-index:9999;background:transparent;">');
document.write('<div style="text-align:center;display:block;max-width:729px;height:auto;overflow:hidden;margin:auto;">');

// Paste Iklan Float Disini
atOptions = {
  'key' : '7b5af7dc0ad614081f71d61b12b5b532',
  'format' : 'iframe',
  'height' : 90,
  'width' : 728,
  'params' : {}
};

document.write('<scr' + 'ipt type="text/javascript" src="//www.highperformanceformat.com/7b5af7dc0ad614081f71d61b12b5b532/invoke.js"></scr' + 'ipt>');
// Batas Iklan Float

document.write('</div>');
document.write('</div>');


// ======================
// POPUP ADS TENGAH 300x300
// ======================
document.write(`
<style>
  #popupads {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    transform: translate(-50%, -50%);
    background: #fff;
    z-index: 99999;
    text-align: center;
    box-shadow: 0 0 15px rgba(0,0,0,0.35);
    border-radius: 8px;
    overflow: hidden;
  }

  #popupads .close-popupads {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 24px;
    height: 24px;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 50%;
    font-size: 16px;
    line-height: 22px;
    cursor: pointer;
    z-index: 100000;
  }

  #popupads .ads-content {
    width: 300px;
    height: 300px;
    overflow: hidden;
  }
</style>

<div id="popupads">
  <button class="close-popupads" onclick="document.getElementById('popupads').style.display='none'">×</button>
  <div class="ads-content">
`);

// Paste Iklan Popup Disini
atOptions = {
  'key' : '7b5af7dc0ad614081f71d61b12b5b532',
  'format' : 'iframe',
  'height' : 300,
  'width' : 300,
  'params' : {}
};

document.write('<scr' + 'ipt type="text/javascript" src="//www.highperformanceformat.com/7b5af7dc0ad614081f71d61b12b5b532/invoke.js"></scr' + 'ipt>');
// Batas Iklan Popup

document.write(`
  </div>
</div>
`);
