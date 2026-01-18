export const adventureData = {
    chapters: [
        {
            id: "chapter-1",
            title: "La ciudad donde no vive nadie",
            background: "/backgrounds/b1.png",
            correctWatashi: "w1",
            availableWatashi: [
                { id: "w1", image: "/watash/w1.png", name: "Sola" },
                { id: "w2", image: "/watash/w2.png", name: "Caminando" },
                { id: "w3", image: "/watash/w3.png", name: "Buscando" },
            ],
            text: `Estoy frente a una ciudad llena de edificios. Las ventanas están encendidas. Desde lejos parece viva.
      
Pero cuando miro las calles, no hay nadie.

Las personas están dentro. Con eso. Eso les da lo que quieren. Por eso ya no salen.

Yo no estoy con eso. Por eso estoy aquí, mirando desde fuera.`,
        },

        {
            id: "chapter-2",
            title: "El viaje",
            background: "/backgrounds/b3.png",
            correctWatashi: "w3",
            availableWatashi: [
                { id: "w2", image: "/watash/w2.png", name: "Alegre" },
                { id: "w3", image: "/watash/w3.png", name: "Caminando" },
                { id: "w4", image: "/watash/w4.png", name: "Triste" },
            ],
            text: `Decido marcharme.

Si en esta ciudad nadie necesita a nadie, quizá en otra sea distinto. Viajo. Llego a otras ciudades.

Todas están llenas. Todas están vacías.

En cada una encuentro lo mismo: personas acompañadas, pero no juntas.

Empiezo a preguntarme si existe alguien que pueda quererme por quien soy. No por lo que puedo dar. No por lo que puedo cumplir.`,
        },

        {
            id: "chapter-3",
            title: "El encuentro",
            background: "/backgrounds/b2.png",
            correctWatashi: "wi1",
            availableWatashi: [
                { id: "w1", image: "/watash/w1.png", name: "Sola" },
                { id: "wi1", image: "/watash/wi1.png", name: "Encuentro" },
                { id: "w4", image: "/watash/w4.png", name: "Pensativa" },
            ],
            text: `Te encuentro.

Te quedas. No desapareces.

Por primera vez, no estoy sola.

Pero entonces aparece la duda: ¿y si no eres la persona adecuada? ¿y si te quiero… pero no de la forma correcta?

Los corazones no se borran. Elegir duele. No elegir también.

Entiendo que encontrar a alguien no es el final. Es el comienzo de algo más difícil.`,
        },

        {
            id: "chapter-4",
            title: "La ciudad con alguien",
            background: "/backgrounds/nada.png",
            correctWatashi: "wi2",
            availableWatashi: [
                { id: "wi1", image: "/watash/wi1.png", name: "Conociendo" },
                { id: "wi2", image: "/watash/wi2.png", name: "Juntos" },
                { id: "w1", image: "/watash/w1.png", name: "Sola" },
            ],
            text: `Elijo.

No elijo una ciudad sin dolor. No elijo una promesa perfecta.

Te elijo a ti, sabiendo lo que puedo y lo que no puedo ser. Sabiendo que no todo se puede cumplir.

La ciudad sigue llena de luces. Eso sigue existiendo.

Pero ahora, en algún lugar, estoy contigo.

Y eso es suficiente.`,
        },
    ],
};
