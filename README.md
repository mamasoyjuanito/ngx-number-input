# NgxNumberInput

Esta librería fue generada con [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

Esta librería permite capturar valores numericos y mostrarlos separados por "," y al terminar de caputar la información lo muestra de esta misma forma dentro del campo.

### ¿Cómo usarlo?

Debemos importar el Modulo en nuestro **app.module.ts**.



    import { NgxNumberInputModule } from 'ngx-number-input';
	...
	@NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
    	...
        NgxNumberInputModule,
    	...
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }

Para usar el componente te puedes basar en el siguiente ejemplo: 


    <ngx-number-input 
    	styleClass="form-control" 
    	id="inputNumeric" 
    	name="inputNumeric" 
    	#inputNumeric="ngModel" 
    	[(ngModel)]="data.inputNumeric" 
    	min="1" 
    	max="100000" 
    	placeholder="0.00" 
    	[disabled]="false" 
    	required></ngx-number-input>

### Propiedades

- id: Identificador del elemento.
- name: Nombre del elemento.
- styleClass: Nombre de la clase de estilo para el input.
- min: Valor minimo permitido.
- max: Valor maximo permitido.
- placeholder: Texto de ayuda.
- disabled: Para deshabiliitar el componente.
- readonly: Para mostrar como solo lectura.
- required: Para marcarlo como requerido.
- locale: Para formatear el número a una región especifica ("en-GB" es por default).
- currency: Para darle formato de moneda (por ejemplo "EUR", "USD", "INR", etc.). 
