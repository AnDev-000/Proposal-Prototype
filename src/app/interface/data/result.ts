//he creado esta interface pensando en que tanto la tabla de resultados como el formulario de búsqueda puedan acceder a los mismos datos pero sin tener que usar todas las propiedades del objeto Result
//evaluar cambiar nombre a Result tanto a la interface como al service data, ya no tiene mucho sentido llamarlo asi.
export interface Result {
    id?: number | undefined; //identificador de la propuesta n°porpuesta
    details?: string; //detalles de la propuesta(la propuesta tiene varios detalles, investigar como se debe tratar este apartado)
    activityType?:string; //nombre del tipo de actividad(de la persona responsable ?)
    responsible?: string; //nombre de la persona responsable
    state?: boolean | undefined;  //entregado o no entregado
    discarded?: string[]; //log de fechas que fueron descartadas como fecha de finalizacion
    deliverDate?:string; //fecha de entrega
    endDate?: string; //fecha de finalizacion
    email?:string; //correo electrónico de la persona responsable
    array?: [];   //evaluar mas adelante si es necesario crear una interface para este array ya que va almacenar datos concretos id,name,occupation,email de un contacto a notificar
}