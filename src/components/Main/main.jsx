import { useState } from 'react';
import Hero from '../Hero/hero';
import FeatureList from '../FeatureList/featureList';
import Faqs from '../FAQS/Faqs';
import UserReviews from '../UserReviews/userReviews';

export default function Main() {

  return (
    <main>
        <Hero></Hero>
        <FeatureList></FeatureList>
        <Faqs></Faqs>
        <UserReviews></UserReviews>
    </main>
  )
}
