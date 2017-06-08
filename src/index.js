// Import React
import React from "react";
import { graphql, gql } from "react-apollo";
import history from "history";

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
  // kadira: require("../assets/kadira.png"), /* big up kadira 🎩 */
  okgrow: require("../assets/okgrow.svg"),
  schema1: require("../assets/schema-1.png"),
  schema2: require("../assets/schema-2.png"),
  schema3: require("../assets/schema-3.png"),
  schema4: require("../assets/schema-4.png"),
  // twitter: require("../assets/twitter.png"),
  // 🤓
  life: require("../assets/42.png")
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

// lol 🙄
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

// in a real world app, this wouldn't be one giant component of 600 loc 🤣
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
        progress="none"
      >
        <Slide transition={["fade"]}>
          <Heading size={1} lineHeight={1}>
            👋
          </Heading>
          <Heading size={5} lineHeight={1} textColor="gold">
            @xav_cz
          </Heading>
          <Appear>
            <Heading size={2} bold lineHeight={1} textColor="magenta">
              GraphQL?
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]}>
          <AnimatedGraphQL size="40vw" />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} caps lineHeight={1}>
            ❤️
          </Heading>
          <Heading size={5} lineHeight={1} textColor="gray">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flex: 1
              }}
            >
              <span>I use&nbsp;</span>
              <span style={{ color: "#E10098" }}>GraphQL</span>
              <span>&nbsp;daily</span>
            </div>
          </Heading>
          <Link href="https://www.okgrow.com" target="_blank">
            <Image src={images.okgrow} height="5.88rem" width="auto" />
          </Link>
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
            REST 🤔
          </Heading>
        </Slide>
        <Slide transition={["fade"]} align="center flex-start">
          <Heading size={3} lineHeight={1} textColor="gold">
            SW API
          </Heading>
          <Image src={images.schema1} />
        </Slide>
        <Slide transition={["fade"]} align="center flex-start">
          <Heading size={3} lineHeight={1} textColor="gold">
            SW API
          </Heading>
          <Image src={images.schema2} />
        </Slide>
        <Slide transition={["fade"]} align="center flex-start">
          <Heading size={3} lineHeight={1} textColor="gold">
            SW API
          </Heading>
          <Image src={images.schema3} />
        </Slide>
        <Slide transition={["fade"]} align="center flex-start">
          <Heading size={3} lineHeight={1} textColor="gold">
            SW API
          </Heading>
          <Image src={images.schema4} />
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
    starships {
      name
    }
    friends {
      name
      starships {
        name
      }
    }
  }
}`}
              url="https://78nq9535j.lp.gql.zone/graphql"
              // url="http://localhost:9009/graphql"
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
        <Slide transition={["fade"]} align="flex-start flex-start">
          <CodePane
            lang="graphql"
            source={`type Query {
  hero(episode: Episode): Character
  starship(id: ID!): Starship
  # ...
}

type Mutation {
  createHero(name: String!): Character!
  makeFriends(
    heroId: ID!,
    friendId: ID!
  ): [Character!]
  # ...
}

type Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
  starships: [Starship]
}
`}
            textSize={22}
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
        <Slide transition={["fade"]} align="flex-start flex-start">
          <CodePane
            lang="js"
            source={`const resolvers = {
  Query: {
    async hero(root, { episode }, context) {
      return await Character.find({ 
        type: 'hero',
        episode 
      });
    },
  },
  Character: {
    async starships(character) {
      const res = await fetch(
        \`https://api.ships.io/pilots/$\{character.id\}\`
      );
      return await res.json();
    }
  },
  // ...
}`}
            textSize={24}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading
            size={3}
            lineHeight={1}
            margin="0 0 20px 0"
            textColor="magenta"
          >
            GraphQL Server
          </Heading>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <CodePane
                    lang="graphql"
                    source={`type Query {
  hero(episode: Episode): Character
  starship(id: ID!): Starship
  # ...
}

type Mutation {
  createHero(name: String!): Character!
  makeFriends(
    heroId: ID!,
    friendId: ID!
  ): [Character!]
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
      return await Character.find({ 
        type: 'hero',
        episode 
      });
    },
    // ...
  },
  Mutation: { /* ... */ }
  Character: {
    async starships(character) {
      const res = await fetch(\`
        https://api.starships.io/pilot/$\{character.id\}
      \`);
      return await res.json();
    }
  },
  // ...
};`}
                    textSize={18}
                  />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={3} lineHeight={1}>
            🤔
          </Heading>
          <List textColor="magenta">
            {this.props.data.graphQLBenefits.map(benefit => (
              <ListItem
                textSize="2rem"
                margin="0 0 20px"
                key={`benefits-list-${benefit.id}`}
              >
                {benefit.value}
              </ListItem>
            ))}
          </List>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={3} lineHeight={1} textColor="grey" margin="0 0 20px 0">
            🛰
          </Heading>
          <CodePane
            lang="graphql"
            source={`# My query for my awesome Star Wars app
query heroWithTwoHands {
  hero(episode: EMPIRE) {
    name
    starships {
      name
    }
    friends {
      name
      starships {
        name
      }
    }
  }
}`}
            textSize={22}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={3} lineHeight={1} textColor="grey" margin="0 0 40px 0">
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
                {/*
                  // note:
                  // won't talk about it to not confuse the audience
                  // big up for all your work, Kadira team 🎩
                  <TableItem>
                    <Image width="200px" height="200px" src={images.kadira} />
                  </TableItem>
                */}
              </TableRow>
              <TableRow>
                <TableItem textColor="#F26B00">Relay</TableItem>
                <TableItem textColor="#22A699">Apollo</TableItem>
                {/*
                  <TableItem textColor="#FCFCFC">Lokka</TableItem>
                */}
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        {this.props.data.clientFeatures.map(feature => (
          <Slide transition={["fade"]} key={`feature-slide-${feature.id}`}>
            <Heading size={3} textColor="magenta">{feature.key}</Heading>
            <Heading size={5} textColor="cyan">
              {feature.description}
            </Heading>
          </Slide>
        ))}
        <Slide transition={["fade"]}>
          <Heading
            size={3}
            textColor="magenta"
            lineHeight={1}
            margin="0 0 40px 0"
          >
            <span
              className="rocket-refetch"
              onClick={() => {
                this.props.data
                  .refetch()
                  .then(res => {
                    console.log("yeah", res);
                    // 🙄
                    const [, index] = window.location.hash.split("#/");
                    window.location.hash = `#/${Number(index) + 1}`;
                  })
                  .catch(e => console.log("oh", e));
              }}
            >
              🚀
            </span>
          </Heading>
          <List>
            {this.props.data.clientFeatures.map(feature => (
              <ListItem
                textColor="magenta"
                textSize="3rem"
                key={`feature-list-${feature.id}`}
              >
                {feature.key}
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
          <Heading size={1} lineHeight={1} textColor="gold" margin="0 0 40px 0">
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
          <Heading fit lineHeight={1} textColor="gold" margin="0 0 40px 0">
            Easier developer life
          </Heading>
          <Heading size={1} lineHeight={1}>
            ✨
          </Heading>
          <Image
            src={images.life}
            style={{ paddingRight: "24px" /* sketch fail */ }}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading fit lineHeight={1} textColor="gold" margin="0 0 80px 0">
            Incrementally adoptable
          </Heading>
          <Heading size={1} lineHeight={1}>
            🍰
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading fit margin="0 0 40px 0">
            <a href="https://launchpad.graphql.com/kzxv94v37" target="_blank">
              https://launchpad.graphql.com/kzxv94v37
            </a>
          </Heading>
          <CodePane
            lang="graphql"
            source={`query takeaways {
  whyShouldICare {
    whatIsGraphQL 
      # A query language for your API (think gateway?)
  	benefitsOfUsingGraphQL 
      # 1 req for n resources, no over-fetching, type system, ...
    whyAClient 
      # caching, consistency, responsiveness, ...
    howToGetStarted
      # http://graphql.org
      # https://learnapollo.com
      # http://launchpad.graphql.com
  }
}`}
            textSize={22}
          />
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
  # in a real world app, this would be spared in several queries
  query getSlidesData {
    graphQLBenefits {
      id
      value
    }
    clientFeatures {
      id
      key
      description
    }
    heroes {
      id
      username
      avatar
    }
  }
`
)(Presentation);
