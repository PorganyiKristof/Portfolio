import React, { useState } from "react";
import PageLayout from "./PageLayout";
import uuid from "react-uuid";
import { AnimatePresence, motion } from "framer-motion";

const services = [
  {
    HU: {
      title: "Új Weboldal készítése",
    },
    EN: {
      title: "Creating new Website",
    },
    /* desc: <div>Createing new website from the previous one</div>, */
    list: [
      {
        HU: {
          title: "Meglévő Weboldal alapján",
          desc: <div>weboldal késztése egy már meglévőt alapul véve</div>,
          price: "199.000 Ft",
        },
        EN: {
          title: "Website from an existing one",
          desc: <div>Createing new website from the previous one</div>,
          price: "199.000 Ft",
        },
      },
      {
        HU: {
          title: "Teljesen új oldal készítése",
          desc: <div>Weboldal teljesen nulláról</div>,
          price: "Opcionális",
        },
        EN: {
          title: "Creating a brand New Website",
          desc: <div>WebSite from Zero</div>,
          price: "Optional",
        },
      },
      {
        HU: {
          title: "ReBranding",
          desc: <div>Making a new Branding for the website or the company</div>,
          price: "19.900 Ft-tól",
        },
        EN: {
          title: "ReBranding",
          desc: <div>Making a new Branding for the website or the company</div>,
          price: "From 19.900 Ft",
        },
      },
      {
        HU: {
          title: "SEO",
          desc: (
            <div>
              A SEO segít, hogy weboldalad előrébb kerüljön a keresőkben, több
              látogatót hozva neked.
            </div>
          ),
          price: "19.900 Ft-tól",
        },
        EN: {
          title: "SEO",
          desc: (
            <div>
              SEO helps your website rank higher in search engines, bringing you
              more visitors.
            </div>
          ),
          price: "From 19.900 Ft",
        },
      },
    ],
  },
  {
    HU: {
      title: "Segítség Márketingben",
    },
    EN: {
      title: "Help in Marketing",
    },
    list: [
      {
        HU: {
          title: "Ads Analáizis",
          desc: "Elemzés az eddigi eredények alapján és segítség a fejlődésben.",
          price: "29.990 Ft",
        },
        EN: {
          title: "Ads Analitics",
          desc: "Analysis of the results so far and help for development",
          price: "29.990 Ft",
        },
      },
      {
        HU: {
          title: "Kreatív készítés",
          desc: "10 db kreatív készítése amivel be tudod indítani vállakozásod.",
          price: "19.990 Ft",
        },
        EN: {
          title: "Creative Creation",
          desc: "Create 10 creative pieces to kickstart your business.",
          price: "19.990 Ft",
        },
      },
      ,
      {
        HU: {
          title: "Tanácsadás",
          desc: "1 órás tanácsadás a jelenlegi hirdetéseid alapján (beletartozik az ads analízis)",
          price: "49.990 Ft",
        },
        EN: {
          title: "Consulting",
          desc: "1-hour consultation based on your current ads (includes ads analysis)",
          price: "49.990 Ft",
        },
      },
    ],
  },
];

const lang = "HU";
const priceTitle = {
  HU: {
    title: "Ár",
  },
  EN: {
    title: "Price",
  },
};

const servicesTitle = {
  HU: {
    title: "Szolgáltatások",
  },
  EN: {
    title: "Services",
  },
};

function List({ children, list, title }) {
  if (title) {
    return (
      <div className="my-40 w-2/3 2xl:w-1/3 m-auto text-slate-300 ">
        <h2 className="text-2xl mb-20 ">{servicesTitle[lang].title}</h2>
        {list.map((service) => (
          <ListItem
            key={uuid()}
            description={service[lang].desc}
            list={service.list}
            price={service[lang].price}
          >
            {service[lang].title}
          </ListItem>
        ))}
      </div>
    );
  }
  return (
    <div className="mt-5">
      {list.map((service) => (
        <ListItem
          sublist={true}
          key={uuid()}
          description={service[lang].desc}
          list={service.list}
          price={service[lang].price}
        >
          {service[lang].title}
        </ListItem>
      ))}
    </div>
  );
}
function ListItem({ children, description, list, sublist, price }) {
  const [isVisible, setIsVisible] = useState(false);
  const handleOnClick = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <motion.div
      key={uuid()}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      whileTap={sublist && { scale: 0.99 }}
      className={
        sublist
          ? "border rounded-lg p-5 mb-2 text-[16px] cursor-pointer"
          : "border rounded-lg p-7 mb-5 text-xl  cursor-pointer bg-violet-400 bg-opacity-40 shadow-md			"
      }
    >
      <div className="cursor-pointer " onClick={handleOnClick}>
        <h3>{children}</h3>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key={uuid()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="ml-2"
          >
            <div className="italic text-sm ">{description}</div>
            {price && (
              <div>
                {priceTitle[lang].title}: {price}
              </div>
            )}
            {list && <List list={list} title={false} />}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function BusinessPricePage() {
  return (
    <PageLayout>
      <div className="z-20">
        <List list={services} title={true} />
      </div>
    </PageLayout>
  );
}
