import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from './Carousel';
import { Field, FieldLabel, FieldHint, FieldError } from '../Field';
import { useId } from '../helpers/useId';

export const CarouselInput = ({
  actions,
  children,
  error,
  hint,
  label,
  nextLabel,
  onNext,
  onPrevious,
  previousLabel,
  required,
  secondaryLabel,
  selectedSlide,
  id,
  ...props
}) => {
  const generatedId = useId('carouselinput', id);

  return (
    <Field hint={hint} error={error} id={generatedId}>
      <FieldLabel required={required}>{label}</FieldLabel>
      <Carousel
        actions={actions}
        label={label}
        nextLabel={nextLabel}
        onNext={onNext}
        onPrevious={onPrevious}
        previousLabel={previousLabel}
        secondaryLabel={secondaryLabel}
        selectedSlide={selectedSlide}
        id={generatedId}
        {...props}
      >
        {children}
      </Carousel>
      <FieldHint />
      <FieldError />
    </Field>
  );
};

CarouselInput.defaultProps = {
  actions: undefined,
  error: undefined,
  hint: undefined,
  id: undefined,
  required: false,
  secondaryLabel: undefined,
};

CarouselInput.propTypes = {
  actions: PropTypes.node,
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  hint: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  nextLabel: PropTypes.string.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  previousLabel: PropTypes.string.isRequired,
  required: PropTypes.bool,
  secondaryLabel: PropTypes.string,
  selectedSlide: PropTypes.number.isRequired,
};
