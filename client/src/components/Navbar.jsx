import React, { useState } from "react";
import { Link } from "react-router-dom";

const isolationItems = [
  {
    category: "Les combles",
    items: [
      {
        label: "Combles perdus",
        link: "/combles-perdus",
        icon: "/assets/maison.png",
      },
      {
        label: "Combles aménageables",
        link: "/combles-aménageables",
        icon: "/assets/maison.png",
      },
      {
        label: "Toiture terrasse",
        link: "/toiture-terrasse",
        icon: "/assets/maison.png",
      },
      {
        sign: "je simule mon projet",
        link: "/simulation",
        icon: "/assets/maison.png",
      },
    ],
  },
  {
    category: "Les murs",
    items: [
      {
        label: "Isolation extérieure",
        link: "/Isolation-extérieure",
        icon: "/assets/maison.png",
      },
      {
        label: "Isolation intérieure",
        link: "/Isolation-intérieure",
        icon: "/assets/maison.png",
      },
    ],
  },
  {
    category: "Autres travaux",
    items: [
      {
        label: "Isolation des fenêtres",
        link: "/isolation-fenetres",
        icon: "/assets/maison.png",
      },
      {
        label: "VMC double flux",
        link: "/VMC-double-flux",
        icon: "/assets/maison.png",
      },
    ],
  },
  {
    category: "Réussir mon projet",
    items: [
      {
        label: "Le guide de l'isolation",
        link: "/Le-guide-de-l'isolation",
        icon: "/assets/maison.png",
      },
      {
        label: "Témoignages Clients",
        link: "/témoignages-clients",
        icon: "/assets/maison.png",
      },
    ],
  },
];

const chauffageItems = [
  {
    category: "La pompe à chaleur",
    items: [
      {
        label: "Pompe à chaleur air-air",
        link: "/pompe-à-chaleur-air-air",
        icon: "/assets/maison.png",
      },
      {
        label: "Pompe à chaleur air-eau",
        link: "/pompe-à-chaleur-air-eau",
        icon: "/assets/maison.png",
      },
      {
        label: "Pompe à chaleur géothermique",
        link: "/isolation-interieure",
        icon: "/assets/maison.png",
      },
      {
        sign: "je simule mon projet",
        link: "/simulation",
        icon: "/assets/maison.png",
      },
    ],
  },
  {
    category: "La chaudière",
    items: [
      {
        label: "Chaudière à condensation",
        link: "/isolation-fenetres",
        icon: "/assets/maison.png",
      },
      {
        label: "Chaudière à granulés",
        link: "/isolation-exterieure",
        icon: "/assets/maison.png",
      },
      {
        label: "Chaudière à bûches",
        link: "/isolation-interieure",
        icon: "/assets/maison.png",
      },
    ],
  },
  {
    category: "Le poêle",
    items: [
      {
        label: "Poêle à granulés",
        link: "/isolation-fenetres",
        icon: "/assets/maison.png",
      },
      {
        label: "Poêle à bûches",
        link: "/isolation-exterieure",
        icon: "/assets/maison.png",
      },
    ],
  },
  {
    category: "Autres travaux",
    items: [
      {
        label: "Insert cheminée",
        link: "/isolation-fenetres",
        icon: "/assets/maison.png",
      },
      {
        label: "Chauffe-eau thermodynamique",
        link: "/isolation-exterieure",
        icon: "/assets/maison.png",
      },
      {
        label: "Radiateur électrique",
        link: "/guide-isolation",
        icon: "/assets/maison.png",
      },
      {
        label: "Thermostat",
        link: "/temoignages-clients",
        icon: "/assets/maison.png",
      },
    ],
  },
];

const solaireItems = [
  {
    items: [
      {
        sign: "img",
        icon: "/assets/maison.png",
        link: "/simulation",
        imgDes: "Notre offre solaire",
      },
    ],
  },
  {
    category: "Notre offre solaire",
    items: [
      {
        label: "Caractéristiques techniques",
        link: "/pompe-à-chaleur-air-air",
        icon: "/assets/maison.png",
      },
      {
        label: "Comment ça marche?",
        link: "/pompe-à-chaleur-air-eau",
        icon: "/assets/maison.png",
      },
      {
        label: "Installation avec Effy",
        link: "/isolation-interieure",
        icon: "/assets/maison.png",
      },
      {
        sign: "je simule mon projet",
        link: "/simulation",
        icon: "/assets/maison.png",
      },
    ],
  },
  {
    category: "Tout le solaire",
    items: [
      {
        label: "Panneaux solaires photovoltaïques",
        link: "/isolation-fenetres",
        icon: "/assets/maison.png",
      },
      {
        label: "Système solaire combiné",
        link: "/isolation-exterieure",
        icon: "/assets/maison.png",
      },
      {
        label: "Chauffe-eau solaire",
        link: "/isolation-interieure",
        icon: "/assets/maison.png",
      },
    ],
  },
];

const globaleItems = [
  {
    category: "Rénovation globale",
    items: [
      {
        label: "Bilan énergétique",
        link: "/pompe-à-chaleur-air-air",
        icon: "/assets/maison.png",
      },
      {
        label: "Audit énergétique",
        link: "/pompe-à-chaleur-air-eau",
        icon: "/assets/maison.png",
      },
      {
        label: "Rénovation globale",
        link: "/isolation-interieure",
        icon: "/assets/maison.png",
      },
      {
        label: "Trouver mon Accompagnateur Rénov",
        link: "/isolation-interieure",
        icon: "/assets/maison.png",
      },
    ],
  },
  {
    items: [
      {
        sign: "img",
        icon: "/assets/maison.png",
        link: "/simulation",
        imgDes: "Bilan énergétique gratuit",
      },
    ],
  },
];

const aidItems = [
  {
    category: "Aides et Primes",
    items: [
      {
        label: "Prime énergie",
        link: "/pompe-à-chaleur-air-air",
        icon: "/assets/maison.png",
      },
      {
        label: "MaPrimeRénov",
        link: "/pompe-à-chaleur-air-eau",
        icon: "/assets/maison.png",
      },
      {
        label: "Le chéque énergie",
        link: "/isolation-interieure",
        icon: "/assets/maison.png",
      },
      {
        label: "TVA 5,5%",
        link: "/isolation-interieure",
        icon: "/assets/maison.png",
      },
      {
        label: "Léco-PTZ",
        link: "/isolation-interieure",
        icon: "/assets/maison.png",
      },
      {
        label: "Les aides pour la copropriété",
        link: "/isolation-interieure",
        icon: "/assets/maison.png",
      },
    ],
  },
  {
    items: [
      {
        sign: "img",
        icon: "/assets/maison.png",
        link: "/simulation",
        imgDes: "Découvir la prime effy",
      },
    ],
  },
  {
    items: [
      {
        sign: "img",
        icon: "/assets/maison.png",
        link: "/simulation",
        imgDes: "Simuler mes aides",
      },
    ],
  },
];

const actualitésItems = [
  {
    category: "",
    items: [
      {
        label: "Toute l'actu",
        link: "/pompe-à-chaleur-air-air",
        icon: "/assets/maison.png",
      },
      {
        label: "Aides et primes: derniéres infos",
        link: "/pompe-à-chaleur-air-eau",
        icon: "/assets/maison.png",
      },
      {
        label: "Les prix de l'énergie en bref",
        link: "/isolation-interieure",
        icon: "/assets/maison.png",
      },
      {
        label: "Effy décrypte",
        link: "/isolation-interieure",
        icon: "/assets/maison.png",
      },
      {
        label: "Effy dans la presse",
        link: "/isolation-interieure",
        icon: "/assets/maison.png",
      },
    ],
  },
  {
    category: "",
    items: [
      {
        label: "Les chiffres clés de la réno",
        link: "/pompe-à-chaleur-air-air",
        icon: "/assets/maison.png",
      },
      {
        label: "L'actu du batiment",
        link: "/pompe-à-chaleur-air-eau",
        icon: "/assets/maison.png",
      },
      {
        label: "Conseils pour votre maison",
        link: "/isolation-interieure",
        icon: "/assets/maison.png",
      },
      {
        label: "Témoignages d'experts",
        link: "/isolation-interieure",
        icon: "/assets/maison.png",
      },
    ],
  },
  {
    items: [
      {
        sign: "img",
        icon: "/assets/maison.png",
        link: "/simulation",
        imgDes: "S'inscrire à la newsletter",
      },
    ],
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    isMenuOpen: false,
    activeDropdown: null,
  });

  const toggleMenu = () => {
    setState((prevState) => ({
      ...prevState,
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  const toggleDropdown = (name) => {
    if (window.innerWidth < 1024) {
      setState((prevState) => ({
        ...prevState,
        activeDropdown: prevState.activeDropdown === name ? null : name,
      }));
    }
  };

  const DropdownIcon = ({ isOpen }) => (
    <svg
      className="w-6 h-6 mt-0.5 text-black"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={isOpen ? "M5 15L12 8l7 7" : "M19 9L12 16l-7-7"}
      />
    </svg>
  );

  const renderDropdown = (name, data) => {
    const isDropdownOpen = state.activeDropdown === name;

    return (
      <div className="dropdown group">
        {/* Dropdown button */}
        <button
          onClick={() => toggleDropdown(name)}
          className="flex items-center hover:font-bold relative lg:py-5 cursor-pointer"
        >
          {name}
          {/* Dropdown icon visible only on smaller screens */}
          <span className="block lg:hidden">
            <DropdownIcon isOpen={isDropdownOpen} />
          </span>
        </button>

        {/* Dropdown content */}
        <div
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } grid-flow-col xl:left-10 2xl:left-auto lg:left-0 lg:absolute lg:invisible lg:group-hover:visible z-10 h-fit rounded-xl bg-blue-50 py-5 lg:py-10 divide-black lg:divide-x lg:grid items-start justify-start`}
        >
          {data.map(({ category, items }) => (
            <div key={category} className="category-section">
              <h4 className="font-semibold px-7 mb-2">{category}</h4>

              {items.map(({ label, link, icon, sign, imgDes }) => (
                <div
                  className="flex px-7 flex-col justify-start items-start"
                  key={label}
                >
                  {/* Render based on item type */}
                  {icon && sign !== "je simule mon projet" && sign !== "img" ? (
                    <div className="flex gap-2 hover:font-bold items-center">
                      <img className="w-5 h-5" src={icon} alt={label} />
                      <Link to={link} onClick={toggleMenu}>
                        {label}
                      </Link>
                    </div>
                  ) : null}

                  {/* Special button for "je simule mon projet" */}
                  {sign === "je simule mon projet" && (
                    <Link to={link}>
                      <button
                        onClick={toggleMenu}
                        className="font-medium px-4 py-3 rounded-xl bg-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all duration-300"
                      >
                        {sign}
                      </button>
                    </Link>
                  )}

                  {/* Image and description for "img" sign */}
                  {sign === "img" && (
                    <Link to={link}>
                      <img className="w-20 h-20" src={icon} alt={label} />
                      <h3>{imgDes}</h3>
                    </Link>
                  )}

                  {/* Default rendering when there's no icon */}
                  {!icon && <p>{label}</p>}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <nav className="flex justify-between gap-5 h-20 px-4 xl:px-0 max-w-screen-xl m-auto">
        <Link to="/">
          <div className="my-5 text-2xl font-medium w-fit h-fit px-2 border-4 text-center border-black">
            <h2>SOLULEC</h2>
          </div>
        </Link>
        <div className="flex items-center lg:hidden">
          <button onClick={toggleMenu}>
            <img
              alt={state.isMenuOpen ? "close icon" : "menu icon"}
              width={35}
              height={35}
              src={state.isMenuOpen ? "/close.png" : "/menu.png"}
            />
          </button>
        </div>
        <div
          // Mobile responsive
          className={`lg:space-x-5 gap-y-4 text-lg absolute justify-between flex flex-col items-center lg:flex-row z-50 lg:static lg:w-auto lg:py-0 pb-6 w-full left-0 ${
            state.isMenuOpen
              ? "top-[64px]  overflow-scroll lg:overflow-hidden bg-indigo-100 lg:bg-white pt-6"
              : "hidden lg:flex"
          }`}
        >
          {renderDropdown("Isolation", isolationItems)}
          {renderDropdown("Chauffage", chauffageItems)}
          {renderDropdown("Solaire", solaireItems)}
          <div className="flex space-y-5 xl:space-y-0 items-center flex-col lg:hidden xl:flex xl:flex-row space-x-5">
            <span>{renderDropdown("Rénovation globale", globaleItems)}</span>
            {renderDropdown("Aides et Primes", aidItems)}
            {renderDropdown("Actualités", actualitésItems)}
          </div>
          <Link onClick={toggleMenu} to="/about-us">
            Accés pro
          </Link>
          {/* <Link onClick={toggleMenu} to="/about-us">
            About us
          </Link>
          <Link onClick={toggleMenu} to="/contact-us">
            Contact us
          </Link> */}

          <div className="flex gap-4 flex-col lg:flex-row">
            <Link to="/login">
              <button
                onClick={toggleMenu}
                className="font-medium px-4 py-3 rounded-xl bg-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all duration-300"
              >
                Espace client
              </button>
            </Link>
            <Link to="/simulation">
              <button
                onClick={toggleMenu}
                className="font-medium px-4 py-3 rounded-xl bg-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all duration-300"
              >
                Demander un devis
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
