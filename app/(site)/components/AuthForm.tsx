'use client';

import { useCallback, useState } from 'react';
import {
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

import Input from '@/app/components/inputs/Input';
import Button from '@/app/components/Button';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = data => {
    setIsLoading(true);

    if (variant === 'REGISTER') {
      // Axios register
    }

    if (variant === 'LOGIN') {
      // NextAuth SignIn
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    // NextAuth Social SignIn
  };

  return (
    <div
      className='
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
      '
    >
      <div
        className='
          bg-white
          py-8
          px-6
          shadow
          sm:rounded-lg
          sm:px-10
        '
      >
        <form
          className='space-y-6'
          onSubmit={handleSubmit(onSubmit)}
        >
          {variant === 'REGISTER' && (
            <Input
              id='name'
              label='Name'
              register={register}
              errors={errors}
            />
          )}
          <Input
            id='email'
            label='Email'
            type='email'
            register={register}
            errors={errors}
          />
          <Input
            id='password'
            label='Password'
            type='password'
            register={register}
            errors={errors}
          />
          <Button />
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
