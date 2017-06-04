// Import React
import React from "react";
import { graphql, gql } from "react-apollo";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  Appear,
  List,
  ListItem,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableItem,
  CodePane,
  Image,
  Link
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import preloader from "spectacle/lib/utils/preloader";

const images = {
  relay: require("../assets/relay.svg"),
  apollo: require("../assets/apollo.svg"),
  kadira: require("../assets/kadira.png"),
  okgrow: require("../assets/okgrow.svg")
};

preloader(images);

import AnimatedGraphQL from "./GraphQL";
// import AnimatedApollo from "./Apollo";
import GraphiQL from "./GraphiQL";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme(
  {
    primary: "#2C2D31",
    magenta: "#E10098",
    cyan: "#03A9FC",
    gold: "#FFC730",
    grey: "#CECECE"
  },
  {
    primary: "Space Mono",
    secondary: "Space Mono"
  }
);

// lol
const arrayToRows = array =>
  array.reduce(
    (table, value, index) => {
      if (index < 3) {
        table[0].push(value);
        return table;
      }

      if (index < 6) {
        table[1].push(value);
        return table;
      }

      table[2].push(value);
      return table;
    },
    [[], [], []]
  );

class Presentation extends React.Component {
  render() {
    if (this.props.data.loading) {
      return (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#2C2D31",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <AnimatedGraphQL />
        </div>
      );
    }

    return (
      <Deck
        transition={["fade"]}
        transitionDuration={500}
        theme={theme}
        bgColor="primary"
      >
        <Slide transition={["fade"]}>
          <Heading size={1} caps lineHeight={1} textColor="magenta">
            👋
          </Heading>
          <Appear>
            <Heading size={2} bold lineHeight={1} textColor="magenta">
              GraphQL?
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={3} lineHeight={1} textColor="magenta">
            API
          </Heading>
          <Heading textColor="grey" size={4}>
            A syntax that describes
          </Heading>
          <Heading textColor="grey" size={4}>
            how to ask for data
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} lineHeight={1} textColor="grey">
            JS Heroes
          </Heading>
          <Heading size={3} lineHeight={1} textColor="grey">
            ⚙️
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} lineHeight={1} textColor="gold">
            SW Heroes
          </Heading>
          <Heading size={3} lineHeight={1} textColor="gold">
            ✨
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} lineHeight={1} textColor="gold">
            SW API
          </Heading>
          <Heading size={3} lineHeight={1} textColor="grey">
            REST 🖐
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} lineHeight={1} textColor="gold">
            SW API
          </Heading>
          <Heading size={3} lineHeight={1} textColor="magenta">
            GraphQL ️🤔
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <div
            style={{
              overflow: "hidden",
              background: "#fafafa",
              border: "1px solid rgba(0,0,0,.16)",
              borderRadius: "4px",
              height: "700px",
              width: "100%"
            }}
          >
            <GraphiQL
              query={`{
  hero(episode: EMPIRE) {
    name
    friends {
      name
      appearsIn
      starships {
        name
      }
    }
  }
}`}
              url="https://78nq9535j.lp.gql.zone/graphql"
            />
          </div>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} lineHeight={1} textColor="gold">
            SW API
          </Heading>
          <Heading size={3} lineHeight={1} textColor="magenta">
            GraphQL ️☝️️
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading
            size={3}
            lineHeight={1}
            textColor="magenta"
            margin="0 0 80px 0"
          >
            API Contract
          </Heading>
          <Heading size={3} lineHeight={1} textColor="cyan" margin="0 0 80px 0">
            Schema === TRUTH
          </Heading>
          <Heading size={3} lineHeight={1} textColor="cyan">
            📝
          </Heading>
        </Slide>
        <Slide transition={["fade"]} align="center flex-start">
          <Heading size={3} lineHeight={1} textColor="magenta" margin="40px 0">
            Schema === TRUTH
          </Heading>
          <CodePane
            lang="graphql"
            source={`type Query {
  hero(episode: Episode): Character
}

type Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
  starships: [Starship]
}`}
            textSize={24}
          />
        </Slide>
        <Slide transition={["fade"]} align="center center">
          <Heading
            size={3}
            lineHeight={1}
            textColor="magenta"
            margin="0 0 80px 0"
          >
            Resolvers
          </Heading>
          <Heading lineHeight={1} size={3} textColor="cyan" margin="0 0 80px 0">
            data = fn(schema)
          </Heading>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem textSize="5rem">🐬</TableItem>
                <TableItem textSize="5rem">🍃</TableItem>
                <TableItem textSize="5rem">📚</TableItem>
                <TableItem textSize="5rem">🛢</TableItem>
                <TableItem textSize="5rem">❔</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={["fade"]} align="center flex-start">
          <Heading size={3} lineHeight={1} textColor="magenta" margin="40px 0">
            data = fn(schema)
          </Heading>
          <CodePane
            lang="js"
            source={`const resolvers = {
  Query: {
    async hero(root, { episode }, context) {
      return await Character.find({ episode });
    },
  },
  Character: {
    async starships(character) {
      // return from fetch intergalactic API ⛅
    }
  },`}
            textSize={24}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} lineHeight={1} margin="0 0 40px 0">
            🤔
          </Heading>
          <Heading fit lineHeight={1} textColor="magenta" margin="0 0 40px 0">
            server = fn(schema, resolvers)
          </Heading>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <CodePane
                    lang="graphql"
                    source={`type Query {
  hero(episode: Episode): Character
}

type Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
  starships: [Starship]
}`}
                    textSize={18}
                  />
                </TableItem>
                <TableItem>
                  <CodePane
                    lang="js"
                    source={`const resolvers = {
  Query: {
    async hero(root, { episode }, context) {
      return await Character.find({ episode });
    },
  },
  Character: {
    async starships(character) {
      // return from fetch intergalactic API ⛅
    }
  },`}
                    textSize={18}
                  />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={3} lineHeight={1} textColor="grey" margin="0 0 40px 0">
            fetch() is fine
          </Heading>
          <Heading size={5} lineHeight={1} textColor="grey" margin="0 0 40px 0">
            🙂
          </Heading>
          <CodePane
            lang="js"
            source={`async function loadGraphQL(query) {
  const response = await fetch(\`/graphql?doc=\${query}\`);
  const results = await response.json();
  return results.data;
}`}
            textSize={24}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading fit lineHeight={1} textColor="magenta">
            GraphQL Client
          </Heading>
          <Heading size={3} lineHeight={1} textColor="mediumseagreen">
            🚀
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={3} lineHeight={1} textColor="magenta">
            JS Clients
          </Heading>
          <Heading size={6} lineHeight={1} textColor="cyan" margin="0 0 80px 0">
            Pick one that fits your needs
          </Heading>
          <Table lineHeight={1} textColor="cyan">
            <TableBody>
              <TableRow>
                <TableItem>
                  <Image width="200px" height="200px" src={images.relay} />
                </TableItem>
                <TableItem>
                  <Image width="200px" height="200px" src={images.apollo} />
                </TableItem>
                <TableItem>
                  <Image width="200px" height="200px" src={images.kadira} />
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem textColor="#F26B00">Relay</TableItem>
                <TableItem textColor="#22A699">Apollo</TableItem>
                <TableItem textColor="#FCFCFC">Lokka</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        {this.props.data.clientBenefits.map((benefit, index) => (
          <Slide key={`benefit-slide-${index}`} transition={["fade"]}>
            <Heading size={3} lineHeight={1} textColor="magenta">
              {benefit.value}
            </Heading>
          </Slide>
        ))}
        <Slide transition={["fade"]}>
          <AnimatedGraphQL size="10vw" />
          <List>
            {this.props.data.clientBenefits.map((benefit, index) => (
              <ListItem textColor="magenta" key={`list-benefit-${index}`}>
                {benefit.value}
              </ListItem>
            ))}
          </List>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading
            size={1}
            textColor="magenta"
            lineHeight={1}
            margin="0 0 40px 0"
          >
            Ecosystem
          </Heading>
          <Heading size={1} lineHeight={1} margin="0 0 40px 0">
            is DOPE
          </Heading>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem textSize="4rem" textColor="magenta" bold>
                  Community
                </TableItem>
                <TableItem textSize="4rem" textColor="magenta" bold>
                  Devtools
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize="4rem" textColor="magenta">💃🕺</TableItem>
                <TableItem textSize="4rem" textColor="magenta">🛠</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} lineHeight={1}>
            ✨
          </Heading>
          <Heading size={3} lineHeight={1} textColor="gold">
            Easier developer life
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} lineHeight={1}>
            🤓
          </Heading>
          <Heading size={3} lineHeight={1} textColor="gold">
            Incrementally adoptable
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} lineHeight={1} textColor="mediumseagreen">
            Takeaways
          </Heading>
          <Heading size={3} lineHeight={1} textColor="mediumseagreen">
            Launchpad
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading
            size={3}
            lineHeight={1}
            textColor="magenta"
            margin="0 0 40px 0"
          >
            Some GraphQL Heroes
          </Heading>
          <Table>
            <TableBody>
              {arrayToRows(this.props.data.heroes).map((row, rowIndex) => (
                <TableRow key={`row-${rowIndex}`}>
                  {row.map((hero, heroIndex) => (
                    <TableItem
                      textSize="2.5rem"
                      bold
                      key={`hero-${rowIndex}-${heroIndex}`}
                    >
                      <Image
                        src={hero.avatar}
                        width="100px"
                        height="100px"
                        margin="0"
                        style={{ borderRadius: "99px" }}
                      />
                      <Text
                        lineHeight={1}
                        textColor="cyan"
                        margin="-15px 0 40px 0"
                      >
                        @{hero.username}
                      </Text>
                    </TableItem>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={["fade"]}>
          <Link href="https://www.okgrow.com" target="_blank">
            <Image src={images.okgrow} height="156px" width="606px" />
          </Link>
          <Heading fit lineHeight={1} textColor="cyan">
            I use GraphQL at my company
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} lineHeight={1}>
            🎩
          </Heading>
          <Heading size={3} lineHeight={1} textColor="gold">
            @xav_cz
          </Heading>
        </Slide>
      </Deck>
    );
  }
}

export default graphql(
  gql`
  query getSlidesData {
    heroes {
      id
      username
      avatar
    }
    clientBenefits {
      id
      value
    }
  }
`
)(Presentation);
