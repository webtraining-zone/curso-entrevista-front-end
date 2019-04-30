# Paradigmas de Programación en JavaScript

**¿Podrías mencionar dos paradigmas de programación soportados por JavaScript?**

- **Programación Orientada a Objetos basada en herencia prototípica** 
(OOP with prototypal inheritance)

Paradigma que en sentido estricto necesita al menos los siguientes conceptos: **abstracción, herencia, polimorfismo y encapsulamiento**.

- **Programación Funcional** 
(Functional Programming: closures, first class functions, lambdas)

En este paradigma se trata de crear programas por medio de composición de expresiones (funciones), evitar compartir estados y no "mutar"
datos.

**¿Qué es la herencia basada en prototipos de JavaScript?**

JavaScript no es un lenguaje que provea **clases** "reales" como lo hace C++ o Java, en su lugar para soportar herencia,
hace uso de una propiedad "privada" que tienen todos los objetos de JavaScript llamada `prototype`, que a su vez podría tener
otra propiedad `prototype` con un valor asignado o bien un valor `null` (que es el final de la cadena prototípica).

**¿Qué es una clausura/cierre (closure) en JavaScript?**

Una clausura (closure) es una combinación de una función y un contexto (entorno léxico) en el cual esa función fue declarada.


**¿Qué es una función pura?**

- Es una función cuyo valor de retorno es siempre el mismo, si se le pasan los mismos parámetros.
- Función que no produce efectos colaterales (side-effects)

**¿Qué es una *lambda expression/function*?**

Es una función que se usa como "si fuera un dato cualquiera", es decir, son pasadas como parámetros a funciones.

Usualmente estas "lambda functions" son anónimas, sin embargo NO todas las funciones anónimas son "lambda functions".

**¿Qué significa que una función sea *first-class object*?**

En JavaScript, significa que las funciones pueden:

- Ser almacenadas en una variable, un objeto o un array
- Ser pasadas como parámetros a otras funciones (lambda expressions)
- Ser retornadas desde otra función (esto permite las "closures")
