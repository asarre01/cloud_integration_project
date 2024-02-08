import React from 'react';
import GoogleMap from './GoogleMap';

// Composant Contact représentant la section de contact
function Contact() {
    return (
        <section className="text-gray-600 body-font relative">
            {/* Div pour la carte Google Maps */}
            <div className="absolute inset-0 bg-gray-300">
                <GoogleMap/>
            </div>
            {/* Contenu du formulaire de contact */}
            <div className="container px-5 py-24 mx-auto flex">
                {/* Formulaire et informations de contact */}
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    {/* Titre du formulaire */}
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                        Feedback
                    </h2>
                    {/* Description du formulaire */}
                    <p className="leading-relaxed mb-5 text-gray-600">
                        Post-ironic portland shabby chic echo park, banjo fashion axe
                    </p>
                    {/* Champ d'email */}
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    {/* Champ de message */}
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            defaultValue={""}
                        />
                    </div>
                    {/* Bouton d'envoi */}
                    <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg uppercase">
                        Envoyer
                    </button>
                    {/* Informations supplémentaires */}
                    <p className="text-xs text-gray-500 mt-3">
                        Chicharrones blog helvetica normcore iceland tousled brook viral
                        artisan.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
