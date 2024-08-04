## OBJETIVO : Calcular el subtotal (precio sin IVA) y el total (precio con IVA) de las reservas que ha hecho un cliente.

#### CASO 1:

        * En el caso de un cliente en particular:
         -Habitación / día (IVA no incluido):
            -Standard: 100€
            -Suite: 150€
         -Cargas adicionales:
            -Por cada persona adicional en la habitación, 40€
         -IVA: sumarle un 21% al total

         Crear una clase que reciba la lista de reservas y calcule el subtotal y el total teniendo en cuenta las condiciones anteriores.

#### CASO 2:

        * En el caso de un tour operador, al reservar grandes volúmenes, le damos las siguientes condiciones especiales:
         - Todas las habitaciones tienen el mismo precio: 100€
         -Adicionalmente se aplica un 15% de descuento a los servicios contratados

         Crear una clase que herede de la primera que cubra el caso de calculo de totales y subtotales para el tour operador.

#### DESAFÍO:

        * Crear una clase base con la funcionalidad común y dos clases hijas una con el caso para cliente particula y otra para tour operador.

        * En el consructor de la clase base, introduce la lista de precios de habitaciones
