export default class Section {
    constructor({ data, renderer }, containerSelector) {
        this._renderedItems = data;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    
    addItem(element){
        this._container.append(element);
    }

    rendererItem(){
        this._renderedItems.forEach(item => this._renderer(item));
    }

    // Содержит публичный метод, который отвечает за отрисовку всех элементов. 
    // Отрисовка каждого отдельного элемента должна осуществляться функцией renderer.

}