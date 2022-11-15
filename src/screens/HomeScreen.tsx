import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import HomeScreenPostArea from "../components/HomeScreenPostArea";
import { styles } from "../constants/style";
import { useTheme } from "@react-navigation/native";
import CustomSwitch from "../components/CustomSwitch";
import { AppContext } from "../context/AppProvider";
import RPC from '../../ethersRPC'; // for using ethers.js
import PostFavor from "../components/PostFavor";

export default function HomeScreen({ navigation }) {
  const { key, setKey } = React.useContext(AppContext);
  const [favors, setFavors] = useState()
  const [favorsTab, setfavorsTab] = useState(1);
  const { colors } = useTheme();

  React.useEffect(() => {
    return async () => {
      setFavors(await getFavors());
    }
  }, [])

  //Function to get all Incomplete Favors
  const getFavors = async () => {
    const favs = await RPC.getAllIncompleteFavors();
    return favs;
  };

  const onSelectSwitch = (value: React.SetStateAction<number>) => {
    setfavorsTab(value);
    if (favorsTab == 2) {
      navigation.navigate("Favors");
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 20 }}>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.homeScreenPostArea}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                  <Image
                    source={{
                      uri: "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis=",
                    }}
                    style={styles.profileImage3}
                  />
                </TouchableOpacity>
                <HomeScreenPostArea />
              </View>
              <View
                style={{
                  borderWidth: 1,
                  flexDirection: "row",
                  borderColor: "#C6C6C6",
                  borderRadius: 8,
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                  margin: 4,
                  width: 350,
                }}
              >
                <Feather
                  name="search"
                  width={100}
                  size={20}
                  color="#C6C6C6"
                  style={{ marginRight: 5 }}
                />
                <TextInput placeholder="Search" />
              </View>
            </View>
          </View>
          <View style={{ marginVertical: 0 }}>
            <CustomSwitch
              selectionMode={1}
              option1="Requests"
              option2="Offers"
              onSelectSwitch={onSelectSwitch}
            />
          </View>

          {
            favorsTab == 2 && (
              <View>
                <View style={styles.container2}>
                  <View style={styles.sideBySideFlexStart}>
                    <Image
                      source={{
                        uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhISEhIRERIRERISERESEhISEBEYGRQZGRgYGBgcIy4lHB4rHxgYJzgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHzQkJCExNDU0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQxNP/AABEIALcBFAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgADBAUGBwj/xAA7EAABAwIEAwUFBwMEAwAAAAABAAIRAyEEEjFBBVFxBiJhgZETMqGx8AcjQlJiwdEUQ3IzouHxFVOy/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACkRAAICAQQCAgAGAwAAAAAAAAABAhEDEiExQQRRE2EFIoGRodEUMnH/2gAMAwEAAhEDEQA/AOylFQBMAu48fkgajCIRRY6QIUhFFMVAhGFEUgoEIgKIoCgQpCaEYQOhYRhNCMJWOhYUhNCMIsKFhSE4amypWVpKsqkK3KoWosNJVCEKwhCEWKiuEIVkIEJ2KiuFITQgixUBKUxCBTACgCiiQEcxVEK7MkKFYSS6KyECExQIVE0JCiMKIJotCcBIEwKhmqoMKKIhCBkRhRGE7CgQjCgRRYURGFAmRYUCEYRUQOiQjCMJgErKSFATBqawBc4gAAkk2AA1JK86439ojs7qeEaxrAY9tUbmc/xYzQDkTPQJXZVUejtYtL2p7R0OHUg+pL3vkUqLSMzyNT+lo3PzNl5jX7a45oc7+rqEgTlDKIHT3FyPFOKV8VVNWvUdUeQBmdFgNAALAdFEpUaQhZ3lD7Wa+eX4aiaZPusc9rwP8jIPovQOzvaXC8QYTQfD2iX0Xw2q3xjceIkL53yFX4LGVKFRlWk91Oox2Zrm6g/uOYNipUn2aSxLo+mHNSkLmuxvbWjj6YZULKOKaIfTJhtT9VOdQfy6jxFz1LmrRMwlGikhKVaQkITslxESpyEpCoihSgQmhCEWKhVIRIRDENgkVlAqwsQLEWh6WUlBWFqrITslqhZUUhRBO5cEQEAmSNAhEBQKIAMIoIpBQyigRQFERUCIQUkQIgKIhS2UkQJ2BABLicSyjTqVahhlNjnvPgBNvFKxpHJ/aZxoUcN/TMd95iffA1bTB70/5EZemZeQErO4/wAXfiq9Su8waju62ZytFmsHQQFfwrs/WrjMfumc3CXno3bz9FE5xitzbDhlkdpGpe2YBEgXI+SsZSb+Vq7rBdj8LDc7XvcNS57pd1DYCvxHYzCuHdZkvNnOkDrPNcr8mN8HorwZpco4VtNp/A0+Spq4Smdi3oZ+BXV1+xB1puc0lskTGU5rgE7RKtd2HeAIxDptOZoeNPI6p/PEP8Wfo4dmFNNwe14IaZIIIMbj0XqvYTtY57xg8Q7MTahUcZcf0OJ1PI+XJcNxbs9iaDHue1r2BpJezNYfqbqPitfTqEEOa6CDma5puCDYgrbFOMlszkz4ZR/2VM+hnhVla7sxxgYzCsq6VB93Wbye0CfIyCOq2bgtrONorKEJylKqyWhSFFCUpKZJCEWOSyglyUtnZY5yRzkCUpQog5AJSFMUpVGbYqiKCBFoRCATJF0EIoBEJWOgpkoTIsdECKiKVhRAioigdERCgRCllJDNC4v7V+K+xwjKIMOxD7j9FOHH/cWfFds1ePfa9Uc/iFKlPcbhmEDlme/MfgPRJui4xt0avsrw5rz7aoJP9sO2/UuyoOi0brnuCAim2BYWW8oEkwP+FwZ3vse34qWk21GpCyhUnZYNNgjWVm06JHkuOmd1qi0PG4KaRFkuQ/QSva4J7i2EqgGeUXlcD2o4AKGbEURDJmpTGjebmj5hdtUcRqsDibx7NwdcOBEbHkrxTala5IzY4zi0+Cj7J8VJxNMGWuZTqt6gua4/FvovQ3Lyv7JBkxmKp7MovA6e1YQvVHL14u1Z83kWmTQhKQlMUFaMGKUITIFOxUKgiogKAUpTlKUxUIUpTlIUCoCCKCYqLgiEoTBQaUEIqBQIHQwRShMEh0FFBFFhQQiEAiEDoiYJUQpKQMTWyU31IzZGPfl55Wkx8F4zx/GuxtVmLeGguotpFjWlpaGvcb3M+9E+C9orU87Hs/OxzfVpC8axNB7ctPKAKYyvgXaQNPVZTk1JLo68EIyg32jMoubRoNLjAa2TzM3WodxXFVD92BSp7FzsoPXmug/p21BlIBAAsVrcRwYl7S7O9gkZGw0eYGoXNkyJNo78WKUop9GtHEcdTMh7SAdiyD0ldNwXtS+pDajQ0gCeTjutXguz9Km10GoS5uUZqYBb3p95sToB3pGqsoYD2dRjpnMQHAAgeOt/LZc05Rk6X9HVCEoq3+12dXie0LaTczm3IlrRv4Ln8T24c4xToPd4w4g+i2nF8IKjWtYA0hsgwDt4rk62BxEtNOo1hBdmaX9MsEtN9ZsNlGNq6f8AJpkjKrX8G2odrRmDa1N1MO3IMt8ei29YtqUy5sOBYXNIMtNtQueo0sSHNZVDarS0ZnNNxa9jfXx8gtxgcIKFJzATl7xAMHKCLgeC0uLf2ZVNLfj7F+zSmxmKxdRzmtL2UmMDnAOeS5xdA8MrfVekuXnnZjh8nCkGM1UVHwbnLLr+gsvQ3L0ME9SddOjxvLw6JJt7tX/wQoIlBb2cdAQKYpU7FQqCYhRqLDSIQgQsoMSOppa0W8TMYpSrXshUOKpOzOUaAohmUTJouCISApgVJoOEUgKYFAUMEQkBRBQMcIpJRlSA8oykzKSgZZKIKrlEFAF7CvKe0WGdTxOJbmN35o2LHd4ecOHovU2uXmn2q47+nr4chjT7Wi7OZg91wAPo4rOcbR0YJaW0+0Lws5gD0W/oUhGi5HA4j2Zb56eR/ddRhMYCJlef5DSlue34duOxkvZAMNHVaF4DqgkjunbQLL4rxJ4Y8MscpDYN5haHB8Wote1jw9jjHeqNIbP+Syx07ZvldNROuLwQwj8O+0eKsfg6b7lg6j+VjVeKUKdMS4cobLi6fAXSMx/syzXI/SRpymdFEnHk0inwZJwTALCOfitVxN2VjgLS0gdTZbx+KBGy57H1Q+rTZqM4cfIzHqFeOrtdGWa6p9nR9nGN9o7K3KKbABOveEC21gV0TitVwKkWU3vcCHVH5riHEAQJnzWe569PxoacaX6ngebl15W/Ww8oZlXnUL1vRy2h5RBVOZTMig1IvKSYVZqJC9CiwckZjaqPtFg5kzXpOBccpbVcsV6d71U4qoqjOcrEUUlFaGVFgejnVAcmBU0VqLg5HMqgUwKKCywOTh6plEFKhpl2ZQOVUoyih2WypKqlGUqCy3MoHKuUZRQ7LmuXmn2zYcluDq/hBrU3HxcGOb/8uXo7Stb2m4KzHYV+HcQ1xh9N8Tke33T01B8CVMo7FwlTPMsEc9Onscgc7fVoM/ELZ0cQRScW3c1psLk8iAtTUY/CvDHwHU2MY6DIztaGmOd1lYfFNa47B0B08jf66rzPJjbPa8SdRNayvUD4rmoye8HFrzPO4Gl/BbDDYSlVF6zDe2ZpLR4GdF0FWnTqta7KCNAN58CqjhqbZBaHi/dqMzR0KwcrXo7Y40nvuYFLCCgY9tSAzZmiYGWDblMxdYfEOJVGw0PY7K4WzNJcNrjz+C3uGwdCoIDWCfy0xmPmehV2O4bSFMNDGiHBwFgbG5Ki13uaSj6dFVCq40wbjM0EDrotj2TpZq9Sof7bA0E/mdr5w3/ctTiKzWy4kWkhvjFx4LqOyuH9nhWuIIdWJqmdYd7v+0D1XV4MLlfo838Sy1DT7Ny5yrJRcUhXr0eA2SUJUQTESVJUUJTAiCkoSkAVJSygSgLGJSEoEpCUUJsMqJJURRNhBRBShME6FYwKYFIEQih2OHJg5VhMEDscOUzJUUqHY0psyrRCKHY0ogpQmAQFjtKsYVWAtTxXtFQw2Rs+2qPdkZTplpJO5c7RoG5PxSZSt8HAdrW5sRXI/wDa/wCB/wCFzJxTmkEGA1wny2XY4mmK76hdY1Kj3i8wS6VznFOEvpnSPi138LzpTi5NM9mOOUYpr0b3g/EJyi3etIJJNrkuO110bntqa5Ta7YHw6/svL8Jjn0HXBi9j42XQ0e0jCIOWSPxTPh+9/FcuTG7tLY7cOZVTe52WGrhrYgTMTG/8arQcb4qWjmXd1o3km/y+KwcR2jYR3QXOcDDRe5H4R5LEwnDK+Ifnf3B+EGS+DtG3ndTGCW8ti5zcvyx3MnB034mpTYCcrnBr+XedcTudV60GhoDQIDQAByA0XDYbh/sGZqcCq1ssJu0OAkfH5raYDtbTcymazHML2g52DMzzGo+K7/EcaZ5H4hjla7OiKUoUKzKjQ+m5r2nRzTIRIXeeYBBEpSmSSVJQJSkoFY0pSUJQJQFhlKSgSgSihWElKSgSkJTFYZUSSimKzCw/E2u3CzaeIa7deY0cY9uhW0wvGnN1K5I+VF87HZLxJLjc9ADxzTSuNZx8c1mM44CNVqssH2YvDNdHSe2ATh4XJOx1R57oJHVXjHVALtMQhZYvsbwzSto3zq91lsMiVyDOJS8A810eGxjS0CVSmpcEuEo8meAiAtZjON0aQ7xLnflZBPnsFzfEu1Fd8imG0mRqIdU9dvTzQ5JDjByOwxuOpUG5qlRrBsNXHoBcrQYntnTBilSe/wDU85W9YEyuKqPc4zUc5ziZLnGXHqfNVQSdZuRFvWT0WbyHRHCuzdcT49ia7SHvDGbMYCxptvufMrAwIDqjSI7rXNA5GRYeiwni19dRsNbq5hNNweP0yN9dY+t1jOTa2OnFGMXudLhqELNFJrhleARyIkJeF1WVaYe0g842Ky3jLcrycluR7uPSoquDUYvs5RdJyxOwK0tXs9Raf9N5v+ay62o/MICx20ClHV7YpaPSNLguEtZ7rGs5kRPmdVuKdHKLK4UDrZYHEeKU6IIJzVNmDXz5LSMXJmcpRgreweKY/wBjTN5c+WsG/XoFzgrB0AQAwAD0j+fRY2JxTqry95BOkCe7qAAPrVIX91wnUz+aV6GLHpX2eV5GfXLbg2rMTUYS6m97DYgsc4B1t4tzW84X2tqNOWsPaNGpGUVG+J2IXLU60gd682uZ5X9Co4SMzXRLbi5IjWd1upNHI4xkepYLitCsPu6jSfynuvHkdfJZhC8jFYg635ytrgO0lemPfJECziHNHKJmN1oprsylhfR6IQkK5nA9rJIFVgE7ts4Dpefguiw+Kp1G5qbg4eGo6hXFpmMouPIxKBKLkhKohkJSkoFyUuTJsJKQlQuSlydEthlBJmUToVnnYwD+SP8A4967YYRvJEYRvILw9LPpaRxTeGv8VfQ4e4Ea/Fdi3Ct5JxhW8kUwpGJwvDQL8ll18KDorWUgE78rGue4w1oJceQCqNoJJM5niGFZT7zjEm3MrW4nijiMjDlbOoJDj1P1oquJY016jngEAuAaNYbEAfv5rDIAtYXvvc6Ry3XVFKK+ziktT+gvqOJALo31KLHH9Rj83iNvoJY0Ee8ALTJGth5H1VjhaZmLX87QfrVOx6Uhc5i5AvfW/egLHNTUDQkfiMeJI5K6ow7flI1F9D59VSW3AJkAgmQQmmRJUxXvJP4jBEkQYvMepQbVcJJA8jrrqkMO0HvGbm3qFYwDQ6i0TY+Z01+KbQJ0GjialN+ei5zHT5OuNVtKXaypEVaOe9ywx1stK4nvAwPQgW2jog9viRciALfHVZyxxlyjWOeceGdIztXSH9uoOcwg/taP7dIk/qcfkAubcwx05i9vOyjpEnw0EQDHNR8MfRo/Jn7NljeP4moIzCkNwwRb/LX0K1rXRffdxnXxO10Gs3ImxteDbwRLOgJkwZ8dNRuPVaRgo8IylklLllrDcWt8OszrfXwVjdriNwDA1mJO6rygQZmDYXjUm3r81HQBpZtvW4/bVWYscQJECZGpNo3srmOkHkZkHTnefH5qlwMA6EnlO8dD/wAFFpIAIOh0EgjfTyTEXCnm0ygRJNrRb90zHH3dRe5tp4dFTTeb6aTpz3EK1jOZ3mI5AbjTkpexrHcG8W0IPXp6LMwuOfRcCxwblAkC2bkPHVYbiLEFpGtrHXYKNkH8WugPr4b7IUqCUE0ejcNx4r0w/RwMPbyP8FZDiuN4JxA0nA6sPdeNbDkuzMEAi4IkHYhdEJakcGbG4v6ZWSlLk5CrK0s52hS5I5ycpCnZLFzKIKJkjAopGpwvHPpxmlO1VhWBAFjVzXaziMFmHadYfUO36Wn5+i6J7w1pc6zWguJ8AJK85xuKdUqOqGDmeXX0E2g/WyqPJMuDHb3SQLXjoRptvPwKtZFrzEnxiNlTVJzA2IMToAI1Nt9Vk6T1jWP+9el1pdmdURomDpJtppy8P+kWNnSGxOlzMa3UzOJA3NpMfI6WhQuiY37sjvTB116+iYgPaJB0g2Bde/S3/aqfSBjebxlJGvPlYlZGYubN+oAIH4teU/WiZrhIdAsDlzaXOgGm6LoWmzCYy+xEHcCBN7x0Sg+NibDz/hbOjhs1g1xLmuMNaTMi2aOg+tL28HquEClU3g5ABrqSTc3Oyev2JYZPdJs0YsDfYQTAHLXzlAknQdL3NhyW4rcJr2IoVIkTDbx1Cg4PijMUXTe7iwb+JCpNMl45J1T/AGNPYiIkkgjQk+njby8UoYQc2X80d0kmOXqFv2cCxUyW0x4GoLSPDVKOAYgXdUw7IOmZwGv+PSyA+Kfpmip0z4u/SdbfXxRFI+J2a28gSNLfHxW6dwepAHtsLGgaKoDgPNqZnZvEG49k4Tb7wEevogXxy9GgIHK+l5ud+hurabCCNdoMkttY+PNbjEcAxLBLvZtbBLnGplaBEGTHj8VjUsG2o8MbicM57yYY2pmk8tPAp2HxyfRhEiGkyTFgBDed/qNUQyYJgSNMwNo2tbQ28Vs8XwKpSY57gxzWxmyyco56LWFwBuTJvlAmeU2+fkmRKEoupKgFgFha2xJN/o+qyGd++gOgE7D+eaoY4SJEmD4yQbfCfRPhiNTBNoExbSABaUpcBF0yyo0gkiRfxLdPHogDlJOh2cBlaeYNuaZxsQLhoF3dDp/AS0T33BxjlcDrEbrKzoaMqmdReZHTWI16Lrez2PDx7JxkgSwnzkfCfVcZRMFzre5MAyJif2PnKyMNXNN7HMdGhnxBtHn+6uMtLM8mNSi0ehuaq3BLhMU2rTZUFswuN2kWI8incupM8yUaKyFW5WOVbiqM2hFEFFRBGplFF5B9GEOThyiiANd2ixGTDVLwXFrBv7zhPwlcCDJceWW231ZRRUhMWt7oMxMaEwZkHpusik6bAZpsZMTAO6iiroXZKhI6HK695v8AXormvkc/lsB9eCiiSGyMf3eeUSdQDGlpTA7kDQA7/WvztoiorJM+lXOHY2L1aupgEACPlsgOI4t78or1CSPdHs2W5zlUUWdWzryScZKMdlsbrh3Da7AKtevVcRH3ftCWDrHvLI4jxdtIEuMRuASoonA6ZpRg6OUxfaOrVn2YFNtu8e889BoFr87nFxe4uJg3JcNdgdBOyii6EeLkyzk92VvogxLQLaQPWfL4JGAtcQC5hEGaZh3rI2KCiCUzb4XtBXp9yq72rHQ3M69Rp01/FtqtpiaXD3upvFT2dRj2VMzKdQZi1wNxljUKKKWdmCWqDvcxuMccy1abqB9pTH+owyG1A4xcOAgjz16rC4lhGBratIk0a12tMgtO4InS31qYomuicn59V9Gva2Mu8kDryHx+auYS2Y5Cxg6an4H6uoomcS5LsQ0B2hnKCJOkiNR0KxQ0t9pI1s28wdNd9RyUUWPZ0rgyKIDREGA0jb8pJPVV1KlmxrB8pEfyoohjR0fAeIES2TDhn6OFnR11W7OMUUW0ZM5pwjbJ/WIHEhBRbRbOWcED2wUUUV2zHQj/2Q==",
                      }}
                      style={styles.profileImage2}
                    />
                    <View>
                      <View style={styles.sideBySideFlexStart}>
                        <Text style={styles.text2}>Service: </Text>
                        <Text style={styles.text}> Food delivery</Text>
                      </View>
                      <View style={styles.sideBySideFlexStart}>
                        <Text style={styles.text2}>Wallet Address: </Text>
                        <Text style={styles.text}>0x6grv...z8ph</Text>
                      </View>
                      <View style={styles.sideBySideFlexStart}>
                        <Text style={styles.text2}>Volunteer: </Text>
                        <Text style={styles.text}> Timothy</Text>
                      </View>
                    </View>
                  </View>
                  <Text style={styles.smallerTextBox}>
                    I will make you home made ice-cream. I'll deliver it anywhere
                    around Lewiston, Maine.
                  </Text>
                  <View style={styles.sideBySideCenter}>
                    <View style={styles.button2}>
                      <Text style={styles.buttonText}>Accept</Text>
                    </View>
                    <View style={styles.button2}>
                      <Text style={styles.buttonText}>Comment</Text>
                    </View>
                  </View>
                </View>
              </View>
            )
          }
          </View>
          <PostFavor />
      </ScrollView >
    </SafeAreaView >
  );
};
