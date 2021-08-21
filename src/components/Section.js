export default class Section {
    constructor({ data, renderer }, containerSelector) {
        this._renderedItems = data;
        this._renderer = renderer;
        this._container = containerSelector
        console.log(containerSelector)
    }
    
    addItem(element){
        this._container.append(element);
    }

    rendererItem(){
        this._renderedItems.forEach(item => this._renderer(item));
    }

    prependItem(makeCard) {
        this._container.prepend(makeCard)
    }

}