import {CubeIcon} from "../index";

var ic1:CubeIcon,ic2:CubeIcon,ic3:CubeIcon;
const createArtPacks = require('artpacks');
const packs = createArtPacks(['./ProgrammerArt-ResourcePack.zip']);

packs.on('loadedURL', function(url){
	ic1 = new CubeIcon(document.querySelector('#renderer' ),{
		width : 12,
		fn : function(cubeIcon:CubeIcon){
			cubeIcon.setImages(packs.getTexture('dirt'),30);
		}
	});
	ic2 = new CubeIcon(document.querySelector('#renderer2'),{
		width : 12,
		fn : function(cubeIcon:CubeIcon){
			cubeIcon.setImages(packs.getTexture('stone'),30);
		}
	});
	ic2.setSelected(true);
	ic2.setText("12");
	ic3 = new CubeIcon(document.querySelector('#renderer3'),{
		width : 12,
		fn : function(cubeIcon:CubeIcon){
			cubeIcon.setImages(packs.getTexture('stone'),30);
		}
	});
	ic3.setSelected(true);
	ic3.setText("12");
	ic3.reset();
	ic3.hide();
	ic3.show();
});

(<any>document.querySelector('#action')).onclick=function(){
	ic2.setSelected(!ic2.selected);
}
