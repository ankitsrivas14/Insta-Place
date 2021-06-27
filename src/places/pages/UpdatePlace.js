import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/valiators";
import { useForm } from "../../shared/hooks/form-hook";

import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "India Gate",
    description:
      'The India Gate is a war memorial located astride the Rajpath, on the eastern edge of the "ceremonial axis" of New Delhi, formerly called Kingsway.',
    imageUrl:
      "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    address: "Rajpath, India Gate, New Delhi, Delhi 110001",
    location: {
      lat: 28.6129167,
      lng: 77.2273157,
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
    address:
      "Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi 110006",
    location: {
      lat: 28.6561639,
      lng: 77.2388263,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const [isLoading, setIsLoading] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    true
  );
  const identifiedPlace = DUMMY_PLACES.find((place) => place.id === placeId);
  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);
  const placeUpdateEventHandler = (e) => {
    e.preventDefault();
  };
  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  } else if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <form className="place-form" onSubmit={placeUpdateEventHandler}>
      <Input
        type="text"
        element="input"
        id="title"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter valid title"
        onInput={inputHandler}
        initialValid={formState.inputs.title.isValid}
        initialValue={formState.inputs.title.value}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        errorText="Please provide a valid description (at least 5 chars)"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
        initialValid={formState.inputs.description.isValid}
        initialValue={formState.inputs.description.value}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
