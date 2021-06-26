import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "India Gate",
    description:
      'The India Gate is a war memorial located astride the Rajpath, on the eastern edge of the "ceremonial axis" of New Delhi, formerly called Kingsway.',
    imageUrl:
      "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    addresss: "Rajpath, India Gate, New Delhi, Delhi 110001",
    location: {
      lat: "28.6129167",
      long: "77.2273157",
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Red Fort",
    description:
      "The Red Fort is a historic fort in the city of Delhi in India that served as the main residence of the Mughal Emperors.",
    imageUrl:
      "https://images.pexels.com/photos/4119592/pexels-photo-4119592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    addresss:
      "Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi 110006",
    location: {
      lat: "28.6561639",
      long: "77.2388263",
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
