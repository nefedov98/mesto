export default class Section {
    constructor({ renderer }, containerSelector, api) {
        this._renderer = renderer;
        this._container = containerSelector
        this._api = api;
    }
    
    addItem(element){
        this._container.append(element);
    }

    // rendererItem(cards){
    //     this._renderedItems = cards
    //     this._renderedItems.forEach(cards => this._renderer(item));
    // }
    rendererItem(items) {
        items.forEach(item => {
          this._renderer(item);
        });
      }

    prependItem(makeCard) {
        this._container.prepend(makeCard)
    }

    saveItem = data => {
        this._api.creatNewCard(data)
        .then(console.log)
    }

}