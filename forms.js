

//faça um formulário fazendo a utilização do JS, o formulario deve conter um input de email,um input de senha 
//e um input de submit


class Form{

    itens = [];
    method = 'GET';
    constructor(local,method,action){
        this.local = document.querySelector(local);
        this.method = method;
        this.action = action;
    }

    addItens(item){
        this.itens.push(item);
    }

    render(){
        let elementForm = document.createElement('form');
        elementForm.setAttribute('method',this.method);
        elementForm.setAttribute('action',this.action);

        for(let i in this.itens){
            this.itens[i].render(elementForm);
        }
        this.local.append(elementForm);
    }

}

class Input{
    _type = 'text';
    required = false;
    constructor(name,label){
        this.name = name;
        this.label = label;
    }

    get type(){
        return this._type;
    }

    set type(type){
        if(['text','password','email','submit'].includes(type)){
            this._type = type;
        }
        else{
            throw new Error(`The ${type} type doesn't exist`);
        }
    }

    render(elementForm){
        let input = document.createElement('input');
        input.type = this.type;
        input.name = this.name;
        input.required = this.required;
        input.placeholder = this.label;

        elementForm.append(input);
    }
}

class Button extends Input{
    
    
    constructor(label){
        super('' ,label);
        this.type = 'submit';
    }

    render(elementForm){
        let button = document.createElement('input');
        button.value = this.label;
        button.type = this.type;

        elementForm.append(button);

    }
}

function refactory(name,label,type,required){
    let p = new Input(name,label);
    p.type = type;
    p.required = required;
    return p; 
}

let form = new Form('.formArea','POST', 'https://site.com.br');

let email = refactory('email','Escreva seu email','email',true);
let password = refactory('password','Escreva sua senha','password',false);
let button = new Button('Enviar');

form.addItens(email);
form.addItens(password);
form.addItens(button);

form.render();






