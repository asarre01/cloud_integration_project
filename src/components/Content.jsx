import React from 'react';

// Composant Content représentant une section de contenu
function Content() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        {/* Titre principal */}
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                            Pitchfork Kickstarter Taxidermy
                        </h1>
                        {/* Barre de séparation */}
                        <div className="h-1 w-20 bg-blue-500 rounded" />
                    </div>
                    {/* Paragraphe du contenu */}
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt expedita dolores laborum quod est dignissimos earum eum dicta voluptas tempora aut, libero impedit! Nesciunt, eaque. Veritatis maxime veniam asperiores recusandae.
                    </p>
                </div>
                {/* Grille de cartes avec des images et du contenu */}
                <div className="flex flex-wrap -m-4">
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        {/* Carte avec une image et du contenu */}
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <img
                                className="h-40 rounded w-full object-cover object-center mb-6"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrgdtwOzI8M2h5JpKNvlsxUVI7UQCUBxduOQufwBZ7dAbubVJT95NvyXbF3sBLjkUmbM&usqp=CAU"
                                alt="content"
                            />
                            {/* Sous-titre */}
                            <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                                SOUS-TITRE
                            </h3>
                            {/* Titre */}
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                Ocean
                            </h2>
                            {/* Description */}
                            <p className="leading-relaxed text-base">
                                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                                hexagon disrupt edison bulbche.
                            </p>
                        </div>
                    </div>
                    {/* Répétez ces blocs de carte pour chaque élément */}
                    {/* ... */}
                </div>
            </div>
        </section>
    );
}

export default Content;
