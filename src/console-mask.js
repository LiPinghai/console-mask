<<<<<<< HEAD
// import avalon from 'avalon2';
// import 'console-polyfill';
import $ from './query.js'

import './console-mask.scss';

class ConsoleMask {

    constructor(args = {}) {
        this.console = {};
        this.mockConsole();
        this.height = args.height || '200px';
        this.position = args.position || 'bottom';
        this.init();
    }

    init() {
        this.insertDom();
        // return avalon.define({
        //     $id: 'console-mask',
        //     logs: [],
        //     isSpread: false,
        //     position: this.position,
        //     spread() {
        //         this.isSpread = !this.isSpread;
        //     }
        // })
    }

    // 创建console-mask节点插入body
    insertDom() {
        const consoleDom = document.createElement('div');
        consoleDom.id = 'console-mask';
        consoleDom.setAttribute('ms-controller', 'console-mask');
        consoleDom.setAttribute('class', `type-${this.position}`);
        consoleDom.setAttribute(':class', "[@isSpread?'spread':'']");
        consoleDom.innerHTML = '<div class="btn-spread" ms-on-click="@spread">{{ @position == "bottom" ?  (@isSpread ? "︾" : "︽"):( @isSpread ? "︽" : "︾")}}</div>\
		    <ul id="log-list"></ul>'
        document.body.appendChild(consoleDom);

        const style = document.createElement('style');
        if ('styleSheet' in style) {
            style.setAttribute('type', 'text/css');
            style.styleSheet.cssText = `#console-mask.spread {height: ${this.height}}`
        } else {
            style.innerHTML = `#console-mask.spread {height: ${this.height};}`
        }

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
        this.log(args.logs[0]);
        // this.vm.logs.push(args.logs[0])
    }

    show() {
        this.vm.isSpread = true;
    }

    hide() {
        this.vm.isSpread = false;
    }

    toggle() {
        this.vm.isSpread = !this.vm.isSpread;
    }

    log(text) {
        let li = document.createComment('li');
        li.innerHTML = text;
        $.one('#log-list').appendChild(li);
        // this.vm.logs.push(text);
    }

    clear() {
        $.one('#log-list').innerHTML = '';
    }
}

window.ConsoleMask = ConsoleMask;

=======
// import avalon from 'avalon2';
// import 'console-polyfill';
import $ from './query.js'

window.$ = $;
import './console-mask.scss';

class ConsoleMask {

    constructor(args = {}) {
        this.console = {};
        this.mockConsole();
        this.height = args.height || '200px';
        this.position = args.position || 'bottom';
        this.init();
        this.consoleDom = $.one('#console-mask');
    }

    init() {
        this.insertDom();
        this.bindEvent();

    }

    // 创建console-mask节点插入body
    insertDom() {
        if (!$.one('#console-mask')) {
            const consoleDom = document.createElement('div');
            consoleDom.id = 'console-mask';
            $.addClass(consoleDom, `type-${this.position}`)
            consoleDom.innerHTML = '<div class="btn-spread"></div>\
		    <ul id="log-list"></ul>'
            document.body.appendChild(consoleDom);

            const style = document.createElement('style');
            if ('styleSheet' in style) {
                style.setAttribute('type', 'text/css');
                style.styleSheet.cssText = `#console-mask.spread {height: ${this.height}}`
            } else {
                style.innerHTML = `#console-mask.spread {height: ${this.height};}`
            }

            document.body.appendChild(style);
        }
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
        this.log(args.logs[0]);
    }

    show() {
        if (!$.hasClass(this.consoleDom, 'spread')) {
            $.addClass(this.consoleDom, 'spread')
        }
    }

    hide() {
        if ($.hasClass(this.consoleDom, 'spread')) {
            $.removeClass(this.consoleDom, 'spread')
        }
    }

    toggle() {
        if ($.hasClass(this.consoleDom, 'spread')) {
            $.removeClass(this.consoleDom, 'spread')
        } else {
            $.addClass(this.consoleDom, 'spread')
        }
    }

    log(text) {
        let li = document.createElement('li');
        li.innerHTML = text;
        $.one('#log-list').appendChild(li);
    }

    clear() {
        $.one('#log-list').innerHTML = '';
    }

    bindEvent() {
        $.bind($.one('.btn-spread'), 'click', () => {
            console.log('click')
            this.toggle()
        })
    }
}

window.ConsoleMask = ConsoleMask;

>>>>>>> f94451e422690a7fe58fe7d77f432b1943154a8c
export default ConsoleMask;