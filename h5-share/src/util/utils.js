export function calculate(){
	/**
	 * 以下这段代码是用于根据移动端设备的屏幕分辨率计算出合适的根元素的大小
	 * 当设备宽度为375(iPhone6)时，根元素font-size=16px; 依次增大；
	 * 限制当为设备宽度大于768(iPad)之后，font-size不再继续增大
	 * scale 为meta viewport中的缩放大小
	 */
	(function (doc, win) {
		let docEl = win.document.documentElement;
		let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
		/**
		 * ================================================
		 *   设置根元素font-size
		 * 当设备宽度为375(iPhone6)时，根元素font-size=16px;
		 × ================================================
		 */
		let refreshRem = function () {
			let clientWidth = win.innerWidth
				|| doc.documentElement.clientWidth
				|| doc.body.clientWidth;

			console.log(clientWidth);
			if (!clientWidth) return;
			let fz;
			let width = clientWidth;
			fz = 16 * width / 375;
			docEl.style.fontSize = fz + 'px';
		};

		if (!doc.addEventListener) return;
		win.addEventListener(resizeEvt, refreshRem, false);
		doc.addEventListener('DOMContentLoaded', refreshRem, false);
		refreshRem();
	})(document, window);
}