var signo = prompt();
signo = signo.charAt(0).toUpperCase() + signo.slice(1);

switch (signo) {
    case 'Aries':
        console.log(`${signo}: Mantente en constante movimiento. Si buscas inspiración escucha música, practica yoga o, simplemente, realiza ejercicios o deportes al aire libre. Respira profundo, disfruta de la naturaleza y de la belleza de lo que te ofrece la vida.`);
        break;
    case 'Tauro':
        console.log(`${signo}: Si te levantaste con energía malgastada y te sientes inseguro y con la creatividad bloqueada, no dudes en buscar apoyo en tu pareja, familiares o amigos. Confiar es la clave para ti el día de hoy. Imprime positivismo con buenos pensamientos.`);
        break;
    case 'Geminis':
        console.log(`${signo}: Día para reflexionar sobre lo que viviste y aprendiste durante la semana. No basta con aceptar tus errores, tienes que entender por qué incurriste en ellos y qué debes hacer para no volver a cometerlos. Sé más suave a la hora de autoanalizarte.`);
        break;
    case 'Cancer':
        console.log(`${signo}: La negatividad es contagiosa, rodéate de personas positivas que te ayuden a mejorar como ser humano y a cambiar esa forma pesimista que tienes de ver la vida. Si te sientes triste planifica una cena o una salida con gente que te haga reír.`);
        break;
    case 'Leo':
        console.log(`${signo}: Hoy es un buen día para poner en orden tus finanzas, cuentas bancarias y pagos pendientes. Recorta gastos innecesarios, así ahorrarás más y podrás darte los lujos que tanto te gustan. Practica la tolerancia con tu pareja y deja de juzgar cada paso que das.`);
        break;
    case 'Virgo':
        console.log(`${signo}: Meditas sobre tus problemas y llegas a la conclusión de que no has hecho lo suficiente. Algunos están más en tu mente que en la realidad. Te alejas de todos y disfrutas un tiempo en pareja.`);
        break;
    case 'Libra':
        console.log(`${signo}: Si tú y tu pareja no se entienden es porque están pensando de acuerdo a las necesidades de cada uno y no a la de la relación. Trabajen conjuntamente y busquen un punto medio, verás cómo todo mejora con el pasar de los días.`);
        break;
    case 'Escorpion':
        console.log(`${signo}: Aprovecha el día para descansar y relajarte. Hoy no es un día para pensar en cosas profundas ni preocuparte por los problemas. Suelta todo aquello que te intranquiliza y disfruta de ti mismo y de quienes te rodean. Come con gusto y mantén una buena charla.`);
        break;
    case 'Sagitario':
        console.log(`${signo}: Hoy es un día idóneo para poner tus planes en marcha, no tienes que esperar a que sea lunes para comenzar. Todas esas ideas que tienes en la cabeza, y que ahora parecen abstractas, ordénalas como notas y crea un plan de acción.`);
        break;
    case 'Capricornio':
        console.log(`${signo}: Sé comprensivo con las personas que te rodean. Cultivar la paciencia es la clave para que mantengas una buena relación con los demás, no exijas demasiado y permíteles ser tal como son, sin críticas ni reproches.`);
        break;
    case 'Acuario':
        console.log(`${signo}: Te sientes intranquilo e hiperactivo y necesitas bajar la velocidad de tus acciones y tus pensamientos si no quieres que tu estado de ánimo se vea afectado. Está bien hacer las cosas y tenerlas listas con tiempo, pero ahora debes relajarte y dejar que fluyan.`);
        break;
    case 'Piscis':
        console.log(`${signo}: Te sientes en conflicto con el mundo y tu posición de víctima no te ayuda en nada. Entiende que aquí no hay buenos o malos, solo tú eres el artífice de tu destino y quizá ya es hora de establecer límites. Habla con claridad para que te entiendan, habla con el corazón.`);
        break;

    default:
        console.log("No ingresaste un signo Valido");
        break;
}