export class InputHandler{
    constructor(){
        this.keys = [];
        window.addEventListener('keydown', e => {
            if (this.isRequired(e.key) && this.keys.indexOf(e.key)===-1){
                this.keys.push(e.key);
            }
            console.log("Down - ", e.key, this.keys);
        });
        window.addEventListener('keyup', e => {
            if (this.isRequired(e.key)){
                this.keys.splice(this.keys.indexOf(e.key),1);
            }
            console.log("Up - " ,e.key, this.keys);
        });

    };
     isRequired(curKey)
    {
        return (
            curKey==='ArrowDown' || 
            curKey==='ArrowUp'   || 
            curKey==='ArrowLeft'   || 
            curKey==='ArrowRight'   || 
            curKey==='Enter'

        );

    };
}