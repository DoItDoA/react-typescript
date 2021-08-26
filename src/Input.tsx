import React from "react";
import styled from "styled-components";

interface IInputProps {
  value: string;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}
// event typescript 적용
export const Input: React.FunctionComponent<IInputProps> = ({
  value,
  onChange,
}) => <input type="text" placeholder="Name" />;

interface IFormProps {
  onFormSubmit: (event: React.FormEvent) => void;
}
// event typescript 적용
export const Form: React.FunctionComponent<IFormProps> = ({
  children,
  onFormSubmit,
}) => <form onSubmit={onFormSubmit}>{children}</form>;
