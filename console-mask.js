import avalon from 'avalon2';
// import 'console-polyfill';

import './console-mask.scss';

class ConsoleMask {

  constructor(args = {}) {
    this.console = {};
    this.mockConsole();
    this.height = args.height || '200px';
    this.position = args.position || 'bottom';
    this.vm = this.init();
  }

  init() {
    this.insertDom();
    return avalon.define({
      $id: 'console-mask',
      logs: [],
      isSpread: false,
      position: this.position,
      spread() {
        this.isSpread = !this.isSpread;
      }
    })
  }

  // 创建console-mask节点插入body
  insertDom() {
    const consoleDom = document.createElement('div');
    consoleDom.id = 'console-mask';

    consoleDom.setAttribute('ms-controller', 'console-mask');
    consoleDom.setAttribute('class', `type-${this.position}`);
    consoleDom.setAttribute('ms-on-click', '@spread');
    consoleDom.setAttribute(':class', "[@isSpread?'spread':'']");
    consoleDom.innerHTML = '<div class="btn-spread">{{ @position == "bottom" ?  (@isSpread ? "︾" : "︽"):( @isSpread ? "︽" : "︾")}}</div>\
		    <ul>\
			<li ms-for="el in @logs">{{el}}</li>\
		</ul>'
    document.body.appendChild(consoleDom);

    const style = document.createElement('style');
    style.innerHTML = `#console-mask.spread {height: ${this.height};}`;
    document.body.appendChild(style);
  }

  mockConsole() {
    let that = this;
    if (!window.console) {
      window.console = {};
    } else {
      this.console.log = window.console.log;
      this.console.info = window.console.info;
      this.console.warn = window.console.warn;
      this.console.debug = window.console.debug;
      this.console.error = window.console.error;
    }
    window.console.log = function() {
      that.printLog({
        logType: 'log',
        logs: arguments
      });
    };
    window.console.info = function() {
      that.printLog({
        logType: 'info',
        logs: arguments
      });
    };
    window.console.warn = function() {
      that.printLog({
        logType: 'warn',
        logs: arguments
      });
    };
    window.console.debug = function() {
      that.printLog({
        logType: 'debug',
        logs: arguments
      });
    };
    window.console.error = function() {
      that.printLog({
        logType: 'error',
        logs: arguments
      });
    };
  }

  printLog(args) {
    this.vm.logs.push(args.logs[0])
  }

  show() {
    this.vm.isSpread = true;
  }

  hide() {
    this.vm.isSpread = false;
  }

  spreadToggle() {
    this.vm.isSpread = !this.vm.isSpread;
  }

  clear() {
    this.vm.logs = [];
  }
}

window.ConsoleMask = ConsoleMask;

export default ConsoleMask;