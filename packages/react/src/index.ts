import { Alert } from "./components/Alert.js";
import { Button } from "./components/Button.js";
import { Card } from "./components/Card.js";
import { Heading } from "./components/Heading.js";
import { Input } from "./components/Input.js";
import { Select } from "./components/Select.js";
import { Stack } from "./components/Stack.js";
import { Text } from "./components/Text.js";
import { useDsfr, useDsfrInstance } from "./hooks/useDsfr.js";

export { useDsfr, useDsfrInstance };

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

export { Alert, Button, Card, Heading, Input, Select, Stack, Text };
