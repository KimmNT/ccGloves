import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import shareStyle from "../styles/shareStyle";
import customStyle from "../styles/customOrderStyle";
import hourStyle from "../styles/hourStyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import Customer from "../images/customer-service.png";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function CustomServices({ navigation }) {
  const [serviceList, setServiceList] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [uniqueTypes, setUniqueTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    getServices();
  }, []);

  useEffect(() => {
    if (serviceList.length > 0) {
      const types = [...new Set(serviceList.map((service) => service.type))];
      setUniqueTypes(types);
    }
  }, [serviceList]);

  useEffect(() => {
    if (isFilter) {
      handleSortService();
    } else {
      setFilteredServices(serviceList);
    }
  }, [isFilter, serviceList]);

  const getServices = async () => {
    try {
      const data = await getDocs(collection(db, "servicesList"));
      const servicesData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setServiceList(servicesData);
    } catch (error) {
      console.error("Error fetching services:", error);
      // Handle error (e.g., show an alert or message to the user)
    }
  };

  const handleSortService = (type) => {
    if (type) {
      const sorted = serviceList.filter((service) => service.type === type);
      setFilteredServices(sorted);
    }
  };

  const handleCreateCustomOrder = () => {
    navigation.navigate("CustomOrderCreate", {
      selectedService: selectedService,
    });
  };

  return (
    <View style={shareStyle.container}>
      <View style={shareStyle.content}>
        <View style={[shareStyle.navbar, shareStyle.navbar__two]}>
          <TouchableOpacity
            style={shareStyle.navbar__icon}
            onPress={() => navigation.goBack()}
          >
            <View style={shareStyle.navbar__icon_container}>
              <Icon name="arrow-back" style={shareStyle.icon} />
            </View>
          </TouchableOpacity>
          <Text style={shareStyle.navbar__title}>Create a custom order</Text>
        </View>
        <View style={shareStyle.body}>
          <View style={customStyle.custom__container}>
            <View style={hourStyle.hour__headline}>
              <Image source={Customer} />
              <View style={hourStyle.headline_text}>
                <Text style={hourStyle.item}>Choose your own service</Text>
                <Text style={hourStyle.item}>
                  Or you can call us for more detail
                </Text>
                <Text style={hourStyle.item}>Hot: 012 34 56 78</Text>
                <Text style={hourStyle.item}>Email: ccglove.cc@gmail.com</Text>
              </View>
            </View>
            <View style={customStyle.custom__content}>
              <View style={customStyle.custom__menu}>
                <TouchableOpacity
                  style={customStyle.menu__item_main}
                  onPress={() => {
                    setIsFilter(false);
                    setFilteredServices(serviceList);
                    setSelectedType("");
                  }}
                >
                  <Text style={customStyle.menu__item_text_main}>All</Text>
                </TouchableOpacity>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={customStyle.custom__menu_list}
                >
                  {uniqueTypes.map((type, index) => (
                    <TouchableOpacity
                      style={[
                        customStyle.menu__item,
                        selectedType === type && customStyle.menu__item_active,
                      ]}
                      key={index}
                      onPress={() => {
                        handleSortService(type);
                        setIsFilter(true);
                        setSelectedType(type);
                      }}
                    >
                      <Text
                        style={[
                          customStyle.menu__item_text,
                          selectedType === type &&
                            customStyle.menu__item_text_active,
                        ]}
                      >
                        {type}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
              <ScrollView style={customStyle.custom__items}>
                <View style={customStyle.item__detail}>
                  {filteredServices.map((service, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        customStyle.detail__btn,
                        selectedName === service.name &&
                          customStyle.detail__btn_active,
                      ]}
                      onPress={() => {
                        setSelectedName(service.name);
                        setSelectedService(service);
                      }}
                    >
                      <Text
                        style={[
                          customStyle.detail__btn_value,
                          selectedName === service.name &&
                            customStyle.detail__btn_value_active,
                        ]}
                      >
                        {service.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
      {selectedName && (
        <TouchableOpacity
          onPress={handleCreateCustomOrder}
          style={customStyle.custom__create_container}
        >
          <View style={customStyle.custom__create_btn}>
            <Icon
              name="arrow-forward"
              style={customStyle.custom__create_btn_value}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
