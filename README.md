# console-mask

a simple front-end developer tool for IE and others.

![]('http://feddy.yy.com/s/other/console-mask.jpg')

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
const consoleMask = new ConsoleMask()
```

###apis

show panel:
```
consoleMask.show()
```
hide panel:
```
consoleMask.hide()
```

panel toggle:
```
consoleMask.toggle()
```

log:
```
consoleMask.log() or console.log() or console.warn() ....
```

clear logs:
```
consoleMask.clear()
```
