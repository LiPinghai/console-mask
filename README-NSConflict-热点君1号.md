
# console-mask

a simple front-end developer tool for IE and others.

![](https://github.com/LiPinghai/console-mask/blob/master/console-mask.jpg)

## Usage

```
<script src="path/to/console-mask.min.js"></script>
<script>
	var cm = new ConsoleMask(
    {
      position: 'top', // default 'bottom'
      height: '500px' // default '200px'
    }
  );
</script>
```
### ES6:
install from npm:
```
npm i console-mask --save-dev
```
then:
```
import ConsoleMask from 'console-mask';
const cm = new ConsoleMask()
```

###apis

show panel:
```
cm.show()
```
hide panel:
```
cm.hide()
```

panel toggle:
```
cm.toggle()
```

log:
```
cm.log() or console.log() or console.warn() ....
```

clear logs:
```
cm.clear()
```
