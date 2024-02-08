import React from 'react';

// Composant Hero représentant une section d'en-tête
function Hero() {
    return (
        <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                {/* En-tête avec le logo */}
                <header className="mb-8 flex items-center justify-center py-4 md:mb-12 md:py-8 xl:mb-16">
                    {/* logo - début */}
                    <a
                        href="/"
                        className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
                        aria-label="logo"
                    >
                        {/* Logo avec une icône de fusée */}
                        <svg
                            width={95}
                            height={94}
                            viewBox="0 0 95 94"
                            className="h-auto w-6 text-blue-500"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                        </svg>
                        GAINDE-SPACE
                    </a>
                    {/* logo - fin */}
                </header>
                {/* Section avec du contenu et une image */}
                <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
                    {/* contenu - début */}
                    <div className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
                        {/* Titre révolutionnaire */}
                        <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                            Une façon révolutionnaire de construire le web
                        </h1>
                        {/* Paragraphe de lorem ipsum */}
                        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, beatae illo nesciunt deserunt debitis culpa quaerat sed quasi repellat eius provident totam minus doloremque obcaecati dolores ullam tempore ducimus vero!
                        </p>
                        {/* Formulaire d'inscription avec un champ d'email et un bouton */}
                        <form className="flex w-full gap-2 md:max-w-md">
                            <input
                                placeholder="Email"
                                className="w-full flex-1 rounded border bg-gray-50 px-3 py-2 text-gray-800 placeholder-gray-500 outline-none ring-blue-300 transition duration-100 focus:ring"
                            />
                            <button className="inline-block rounded bg-blue-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-blue-300 transition duration-100 hover:bg-blue-600 focus-visible:ring active:bg-blue-700 md:text-base">
                                S'inscrire
                            </button>
                        </form>
                    </div>
                    {/* contenu - fin */}
                    {/* image - début */}
                    <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-8/12">
                        {/* Image représentant l'espace */}
                        <img
                            src="https://dbdzm869oupei.cloudfront.net/img/photomural/preview/70471.png"
                            loading="lazy"
                            alt="espace"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    {/* image - fin */}
                </section>
            </div>
        </div>
    );
}

export default Hero;