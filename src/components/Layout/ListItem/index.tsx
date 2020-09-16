import React from "react";
import { View } from "react-native";
import { ListItem as ListItemElement, Avatar } from "react-native-elements";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// import { Container } from './styles';

const ListItem: React.FC = ({
  children,
  leftElement,
  centerElement,
  rightElement,
  icon,
  avatar,
  title,
  subtitle,
  chevron,
  divider,
  dense,
  margin,
  padding,
  ...rest
}) => {
  const listStyle = !dense
    ? {}
    : {
        paddingTop: 10,
        paddingBottom: 10,
      };

  if (margin && margin.hasOwnProperty("top")) {
    listStyle.marginTop = margin.top;
  }

  if (margin && margin.hasOwnProperty("bottom")) {
    listStyle.marginBottom = margin.bottom;
  }

  if (padding && padding.hasOwnProperty("top")) {
    listStyle.paddingTop = padding.top;
  }

  if (padding && padding.hasOwnProperty("bottom")) {
    listStyle.paddingBottom = padding.bottom;
  }

  return (
    <ListItemElement
      {...rest}
      bottomDivider={divider}
      containerStyle={listStyle}
    >
      {!icon ? null : (
        <MaterialIcons
          name={icon.name}
          size={icon.size || 25}
          color={icon.color || "#999"}
        />
      )}
      {!leftElement ? null : leftElement}
      {!avatar ? null : (
        <Avatar
          title={avatar.name}
          source={avatar.url && { uri: avatar.url }}
        />
      )}
      {centerElement || (
        <ListItemElement.Content>
          {!title ? null : (
            <ListItemElement.Title>{title}</ListItemElement.Title>
          )}
          {!subtitle ? null : (
            <ListItemElement.Subtitle>{subtitle}</ListItemElement.Subtitle>
          )}
        </ListItemElement.Content>
      )}
      {!rightElement ? null : rightElement}
      {!chevron ? null : <ListItemElement.Chevron />}
    </ListItemElement>
  );
};

export default ListItem;
