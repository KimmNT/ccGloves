import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

export default function Testing() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [detail, setDetail] = useState("");

  const services = [
    {
      name: "Pick up",
      type: "Transportation",
      detail:
        "Arrange transportation from your location to a desired destination.",
    },
    {
      name: "Booking Restaurant",
      type: "Food & Dining",
      detail:
        "Make a reservation at your favorite restaurant or find a new place to dine.",
    },
    {
      name: "Booking Hotel",
      type: "Accommodation",
      detail:
        "Reserve a hotel room for your stay, with various options available.",
    },
    {
      name: "Booking Guided Tours",
      type: "Activities",
      detail: "Schedule a guided tour to explore attractions and landmarks.",
    },
    {
      name: "Booking Spa/Wellness Appointments",
      type: "Wellness",
      detail: "Book a relaxing session at a spa or wellness center.",
    },
    {
      name: "Booking Doctor’s Appointments",
      type: "Health",
      detail:
        "Set up an appointment with a doctor for health consultations or check-ups.",
    },
    {
      name: "Booking Hair/Beauty Salon Appointments",
      type: "Wellness",
      detail: "Arrange an appointment at a salon for hair or beauty services.",
    },
    {
      name: "Booking Rental Equipment",
      type: "Rental",
      detail: "Reserve equipment needed for activities, events, or work.",
    },
    {
      name: "Booking Private Transportation",
      type: "Transportation",
      detail:
        "Secure private transportation services for personal or business use.",
    },
    {
      name: "Renting Vacation Homes",
      type: "Accommodation",
      detail: "Find and rent vacation homes for short-term stays.",
    },
    {
      name: "Booking Language Classes",
      type: "Education",
      detail:
        "Enroll in language courses to learn or improve your language skills.",
    },
    {
      name: "Booking Pet Sitting Services",
      type: "Pet Care",
      detail:
        "Arrange for a pet sitter to take care of your pets while you're away.",
    },
    {
      name: "Booking Personal Shopping Services",
      type: "Personal Services",
      detail: "Hire a personal shopper to assist with your shopping needs.",
    },
    {
      name: "Booking DJ or Musician Services",
      type: "Entertainment",
      detail: "Book a DJ or musician for events or parties.",
    },
  ];

  const handleCreate = async () => {
    for (let service of services) {
      await addDoc(collection(db, "servicesList"), {
        name: service.name,
        type: service.type,
        detail: service.detail,
      });
    }
  };
  return (
    <SafeAreaView>
      <TextInput
        placeholder="name"
        value={name}
        onChangeText={(newText) => setName(newText)}
      />
      <TextInput
        placeholder="type"
        value={type}
        onChangeText={(newText) => setType(newText)}
      />
      <TextInput
        placeholder="detail"
        value={detail}
        onChangeText={(newText) => setDetail(newText)}
      />
      <TouchableOpacity onPress={handleCreate}>
        <Text>Create service</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
