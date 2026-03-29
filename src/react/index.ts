import { Button } from "./components/Button.js";
import { Input } from "./components/Input.js";
import { Select } from "./components/Select.js";
import { Card } from "./components/Card.js";
import { Alert } from "./components/Alert.js";
import { Heading } from "./components/Heading.js";
import { Text } from "./components/Text.js";
import { Stack } from "./components/Stack.js";

export { useDsfr, useDsfrInstance } from "./hooks/useDsfr.js";

export const dsfrComponents = {
  Button,
  Input,
  Select,
  Card,
  Alert,
  Heading,
  Text,
  Stack,
} as const;

export { Button, Input, Select, Card, Alert, Heading, Text, Stack };
