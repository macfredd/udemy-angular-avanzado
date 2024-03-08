
<head>
  <link rel="stylesheet" href="md.css">
</head>


# Curso Avanzado de Angular

<strong>
Plataforma: Udemy   |Instructor: Fernando Herrera |Fecha: Marzo 2023
</strong>


<br/><br/>
## Nota del Autor:

El siguiente documento constituye una exhaustiva recopilación de los conocimientos y prácticas derivados del curso de Angular ofrecido en la plataforma Udemy. Su propósito fundamental radica en servir como un recurso detallado y de fácil acceso para futuras referencias en mi trayectoria profesional.

Además de presentar el código proporcionado por el instructor, este documento incluye explicaciones detalladas de ciertos conceptos que, aunque se abordaron en el curso de Angular, no fueron explorados en profundidad. Se ha procurado enriquecer la comprensión de estos temas mediante análisis más detallados. Esta extensión va más allá de la enseñanza estándar del curso, proporcionando una perspectiva más completa y facilitando la asimilación de conceptos clave. Así, este material no solo actúa como una recopilación de lo aprendido, sino también como un recurso complementario que busca ofrecer una comprensión más holística de los temas tratados en el curso.

Quisiera enfatizar que este material no tiene como finalidad generar lucro alguno. En lugar de ello, busca únicamente consolidar y mantener frescos los conocimientos adquiridos durante el curso. Es importante señalar que la mayor parte del código presente en este documento ha sido proporcionado por el instructor, **Fernando Herrera**. Solo en casos excepcionales se han incorporado modificaciones o funcionalidades adicionales como resultado de prácticas complementarias.

Esta recopilación se presenta como una herramienta personal, creada con el objetivo de fortalecer y consolidar los conceptos aprendidos en el curso de Angular. Agradezco profundamente al instructor por compartir su experiencia y conocimientos, los cuales han sido fundamentales para mi desarrollo en esta tecnología.

Espero que este documento no solo sirva como recordatorio para mí, sino también como una fuente de conocimiento para otros estudiantes interesados en profundizar en Angular. Cabe destacar que cualquier beneficio derivado de este material debe ser atribuido principalmente al esfuerzo y dedicación del instructor y la plataforma Udemy, a quienes agradezco por facilitar este valioso aprendizaje.

[Mas información Aquí: https://www.udemy.com/course/angular-avanzado-fernando-herrera/](https://www.udemy.com/course/angular-avanzado-fernando-herrera/)



__06/Marzo 2024 - ... __



<div style="page-break-after: always;"></div>

## C O N T E N I D O
<hr/>



<div style="page-break-after: always;"></div>

## Instalación

Se requieren las mismas herramientas instaladas en el curso Básico [Vew guía de Instalación](https://github.com/macfredd/udemy-angular/blob/master/00-Curse-Book/Angular-Curso.md#instalaci%C3%B3n)

<div style="page-break-after: always;"></div>

## Angular Cli Tests


Durante la participación en este curso (Marzo 2024) esta es la versión del Angular Cli / Node y Angular.

```bash
[fcruz@fedora 01-clitest]$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 17.2.3
Node: 20.10.0
Package Manager: npm 10.2.3
OS: linux x64

Angular: 17.2.4
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1702.3
@angular-devkit/build-angular   17.2.3
@angular-devkit/core            17.2.3
@angular-devkit/schematics      17.2.3
@angular/cli                    17.2.3
@schematics/angular             17.2.3
rxjs                            7.8.1
typescript                      5.2.2
zone.js                         0.14.4
```


## Comando help:

**--help** podemos usarlo de forma global `ng --help` o sobre un comando específico, por ejemplo podemos obtener ayuda para el comando que genera un componente:

```bash
$ ng g c --help
ng g component [name]

Creates a new, generic component definition in the given project.

Arguments:
  name  The name of the component.                                                                                                                                                                                                   [string]

Options:
     -c, --change-detection    The change detection strategy to use in the new component.                                                                                           
     
     [string] [choices: "Default", "OnPush"] [default: "Default"]
  ```

NOTA: se mostrará todas las opciones, en este caso a manera de ejemplo mostramos el parámetro **-c** para especificar la estrategia de detección de cambios.

A continuación se muestran las opciones completas para la versión del ***cli 17.2.3***

|Option|Desc|Values|
|-|-|-|
|--help|Shows a help message for this command in the console.|[boolean]|
|--interactive|Enable interactive inputprompts.|[boolean] [default: true]|
|-d, --dry-run|Run through and reports activity without writing out results.|[boolean] [default: false]|
|--defaults|Disable interactive input prompts for options with a default.|[boolean] [default: false]|
|--force|Force overwriting of existing files.|[boolean] [default: false]|
|-c, --change-detection|The change detection strategy to use in the new component. |[string] [choices: "Default", "OnPush"] [default: "Default"]|
|-b, --display-block|Specifies if the style will contain `:host { display: block; }`.|[boolean] [default: false]|
--export|The declaring NgModule exports this component.|[boolean] [default: false]|
|--flat|Create the new files at the top level of the current project.|[boolean] [default: false]|
|-s, --inline-style|Include styles inline in the component.ts file. Only CSS styles can be included inline. By default, an external styles file is created and referenced in the component.ts file.|        [boolean] [default: false]|
|-t, --inline-template|Include template inline in the component.ts file. By default, an external template file is created and referenced in the component.ts file.|                                            [boolean] [default: false]|
|-m, --module|The declaring NgModule.|[string]|
|-p, --prefix|The prefix to apply to the generated component selector.|[string]|
|--project|The name of the project.|[string]|
|--selector|The HTML selector to use for this component.|[string]|
|--skip-import|Do not import this component into the owning NgModule.|[boolean] [default: false]|
|--skip-selector|Specifies if the component should have a selector or not.|[boolean] [default: false]|
|--skip-tests|Do not create "spec.ts" test files for the new component.|[boolean] [default: false]|
|--standalone|Whether the generated component is standalone.|[boolean] [default: true]|
|--style|The file extension or preprocessor to use for style files, or 'none' to skip generating the style file.|[string] [choices: "css", "scss", "sass", "less", "none"] [default: "css"]|
|--type|Adds a developer-defined type to the filename, in the format "name.type.ts".|[string] [default: "Component"]|
|-v, --view-encapsulation|The view encapsulation strategy to use in the new component.| [string] [choices: "Emulated", "None", "ShadowDom"]|


## Primera APP

```bash
$ ng new 01-clitest --standalone false
```

<aside class="nota-informativa">
<p> Vamos a usar la forma anterior basada en módulo. Esto lo hacemos con la opción <strong>--standalone false</strong></p>
</aside>

## Comandos básicos del Ng Cli.

Podemos usar la opción **-d** la cual nos permite probar varios opciones sin aplicar cambios en el proyecto, por ejemplo: Creemos un componente home con y sin el flag  **--flat**

### Agregar componente
```bash
$ ng g c home -d
CREATE src/app/home/home.component.css (0 bytes)
CREATE src/app/home/home.component.html (19 bytes)
CREATE src/app/home/home.component.spec.ts (587 bytes)
CREATE src/app/home/home.component.ts (191 bytes)
UPDATE src/app/app.module.ts (467 bytes)
```

Crea el Componente en su propio directorio ./src/app/home, ahora usemos el --flat.

```bash
$ ng g c home -d --flat
CREATE src/app/home.component.css (0 bytes)
CREATE src/app/home.component.html (19 bytes)
CREATE src/app/home.component.spec.ts (587 bytes)
CREATE src/app/home.component.ts (191 bytes)
UPDATE src/app/app.module.ts (462 bytes)
```

Crea el componente en la ruta ./src/app

Coloquemos el Inline CSS **-s, --inline-style** y Inline Template **-t, --inline-template**

```bash
$ ng g c home -d --flat -s -t
CREATE src/app/home.component.spec.ts (587 bytes)
CREATE src/app/home.component.ts (183 bytes)
UPDATE src/app/app.module.ts (462 bytes)
```

Finalmente creemos el componente sin los archivos de prueba con la opción **--skip-tests**

```bash
$ ng g c home -d --flat -s -t --skip-tests
CREATE src/app/home.component.ts (183 bytes)
UPDATE src/app/app.module.ts (462 bytes)
```

Ejecutamos este último comando sin el -d para aplicar los cambios:

```bash
$ ng g c home --flat -s -t --skip-tests
CREATE src/app/home.component.ts (183 bytes)
UPDATE src/app/app.module.ts (462 bytes)
```

El componente creado es el siguiente:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
  `,
  styles: ``
})
export class HomeComponent {

}
```

Adicionalmente, Ng Cli actualiza el **AppModule** y declara el nuevo componente. Pero, esto no lo hace visible al mundo exterior (fuera del componente) simplemente lo declara dentro del mismo módulo para su uso interno.

```bash
$ tree
.
├── app.component.css
├── app.component.html
├── app.component.spec.ts
├── app.component.ts
├── app.module.ts
├── app-routing.module.ts
└── home.component.ts  <--------------
```