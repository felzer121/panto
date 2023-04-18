import Head from "next/head";
import Header from "@/components/Header/index";
import gilroy from "@/public/fonts/font";
import PreviewBlock from "@/components/PreviewBlock";
import ChoosingUs from "@/components/ChoosingUs";
import Catalog from "@/components/Catalog";
import AboutExperiences from "@/components/AboutExperiences";
import AboutMaterials from "@/components/AboutMaterials";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

import { useRouter } from "next/router";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";

type Props = {
  // Add custom props here
};

export default function Home() {
  const router = useRouter();
  const changeTo = router.locale === "en" ? "ru" : "en";

  const { t } = useTranslation(["catalog", "reviews"]);
  const catalog = [
    {
      name: t("chair.title"),
      products: [
        {
          name: t("catalog:chair.products.0.name"),
          category: t("catalog:chair.category"),
          rating: 4.5,
          img: "/image/MarvelBruno.png",
          price: t("catalog:chair.products.0.price"),
        },
        {
          name: t("catalog:chair.products.1.name"),
          category: t("catalog:chair.category"),
          rating: 4.5,
          img: "/image/LoftFred.png",
          price: t("catalog:chair.products.1.price"),
        },
        {
          name: t("catalog:chair.products.2.name"),
          category: t("catalog:chair.category"),
          rating: 4.5,
          img: "/image/sakariasArmchair.png",
          price: t("catalog:chair.products.2.price"),
        },
        {
          name: t("catalog:chair.products.3.name"),
          category: t("catalog:chair.category"),
          rating: 3.5,
          img: "/image/BaltsarChair.png",
          price: t("catalog:chair.products.3.price"),
        },
        {
          name: t("catalog:chair.products.4.name"),
          category: t("catalog:chair.category"),
          rating: 5,
          img: "/image/AnjayChair.png",
          price: t("catalog:chair.products.4.price"),
        },
        {
          name: t("catalog:chair.products.5.name"),
          category: t("catalog:chair.category"),
          rating: 4,
          img: "/image/NyantuyChair.png",
          price: t("catalog:chair.products.5.price"),
        },
        {
          name: t("catalog:chair.products.6.name"),
          category: t("catalog:chair.category"),
          rating: 4,
          img: "/image/Russo.png",
          price: t("catalog:chair.products.6.price"),
        },
        {
          name: t("catalog:chair.products.7.name"),
          category: t("catalog:chair.category"),
          rating: 4,
          img: "/image/Tyrin.png",
          price: t("vchair.products.7.price"),
        },
      ],
    },
    {
      name: t("catalog:bed.title"),
      products: [
        {
          name: t("catalog:bed.products.0.name"),
          category: t("catalog:bed.category"),
          rating: 4.5,
          img: "/image/bed_1.png",
          price: t("catalog:bed.products.0.price"),
        },
        {
          name: t("catalog:bed.products.1.name"),
          category: t("catalog:bed.category"),
          rating: 4.5,
          img: "/image/bed_2.png",
          price: t("catalog:bed.products.1.price"),
        },
        {
          name: t("catalog:bed.products.2.name"),
          category: t("catalog:bed.category"),
          rating: 4.5,
          img: "/image/bed_3.png",
          price: t("catalog:bed.products.2.price"),
        },
        {
          name: t("catalog:bed.products.3.name"),
          category: t("catalog:bed.category"),
          rating: 4.5,
          img: "/image/bed_4.png",
          price: t("catalog:bed.products.3.price"),
        },
        {
          name: t("catalog:bed.products.4.name"),
          category: t("catalog:bed.category"),
          rating: 4.5,
          img: "/image/bed_5.png",
          price: t("catalog:bed.products.4.price"),
        },
        {
          name: t("catalog:bed.products.5.name"),
          category: t("catalog:bed.category"),
          rating: 4.5,
          img: "/image/bed_6.png",
          price: t("catalog:bed.products.5.price"),
        },
        {
          name: t("catalog:bed.products.6.name"),
          category: t("catalog:bed.category"),
          rating: 4.5,
          img: "/image/bed_7.png",
          price: t("catalog:bed.products.6.price"),
        },
      ],
    },
    {
      name: t("catalog:sofa.title"),
      products: [
        {
          name: t("catalog:sofa.products.0.name"),
          category: t("catalog:sofa.category"),
          rating: 4.5,
          img: "/image/sofa_1.png",
          price: t("catalog:sofa.products.0.price"),
        },
        {
          name: t("catalog:sofa.products.1.name"),
          category: t("catalog:sofa.category"),
          rating: 4.5,
          img: "/image/sofa_2.png",
          price: t("catalog:sofa.products.1.price"),
        },
        {
          name: t("catalog:sofa.products.2.name"),
          category: t("catalog:sofa.category"),
          rating: 4.5,
          img: "/image/sofa_3.png",
          price: t("catalog:sofa.products.2.price"),
        },
        {
          name: t("catalog:sofa.products.3.name"),
          category: t("catalog:sofa.category"),
          rating: 4.5,
          img: "/image/sofa_4.png",
          price: t("catalog:sofa.products.3.price"),
        },
        {
          name: t("catalog:sofa.products.4.name"),
          category: t("catalog:sofa.category"),
          rating: 4.5,
          img: "/image/sofa_5.png",
          price: t("catalog:sofa.products.4.price"),
        },
        {
          name: t("catalog:sofa.products.5.name"),
          category: t("catalog:sofa.category"),
          rating: 4.5,
          img: "/image/sofa_6.png",
          price: t("catalog:sofa.products.5.price"),
        },
        {
          name: t("catalog:sofa.products.5.name"),
          category: t("catalog:sofa.category"),
          rating: 4.5,
          img: "/image/sofa_7.png",
          price: t("catalog:sofa.products.5.price"),
        },
      ],
    },
    {
      name: t("catalog:lamp.title"),
      products: [],
    },
  ];

  const testimonials = [
    {
      id: 1,
      pictureUser: "/image/user_1.webp",
      name: t("reviews:testimonials.first.name"),
      position: t("reviews:testimonials.first.position"),
      pictureFon: "/image/review_1.webp",
      rating: 4,
      description: t("reviews:testimonials.first.description"),
    },
    {
      id: 2,
      pictureUser: "/image/user_2.webp",
      name: t("reviews:testimonials.second.name"),
      position: t("reviews:testimonials.second.position"),
      pictureFon: "/image/review_2.webp",
      rating: 3,
      description: t("reviews:testimonials.second.description"),
    },
    {
      id: 3,
      pictureUser: "/image/user_3.webp",
      name: t("reviews:testimonials.third.name"),
      position: t("reviews:testimonials.third.position"),
      pictureFon: "/image/review_3.webp",
      rating: 3,
      description: t("reviews:testimonials.third.description"),
    },
    {
      id: 4,
      pictureUser: "/image/user_4.webp",
      name: t("reviews:testimonials.fourth.name"),
      position: t("reviews:testimonials.fourth.position"),
      pictureFon: "/image/review_4.webp",
      rating: 3,
      description: t("reviews:testimonials.fourth.description"),
    },
    {
      id: 5,
      pictureUser: "/image/user_5.webp",
      name: t("reviews:testimonials.fifth.name"),
      position: t("reviews:testimonials.fifth.position"),
      pictureFon: "/image/review_5.webp",
      rating: 3,
      description: t("reviews:testimonials.fifth.description"),
    },
    {
      id: 6,
      pictureUser: "/image/user_6.webp",
      name: t("reviews:testimonials.sixth.name"),
      position: t("reviews:testimonials.sixth.position"),
      pictureFon: "/image/review_6.webp",
      rating: 3,
      description: t("reviews:testimonials.sixth.description"),
    },
  ];

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={gilroy.className}>
        <Header changeTo={changeTo} />
      </header>

      <main className={gilroy.className}>
        <PreviewBlock changeTo={changeTo} />
        <ChoosingUs />
        <Catalog catalog={catalog} />
        <AboutExperiences />
        <AboutMaterials />
        <Reviews testimonials={testimonials} />
        <Footer />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "common",
      "about",
      "catalog",
      "reviews",
      "footer",
    ])),
  },
});
