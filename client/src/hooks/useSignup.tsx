import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { SignupFormType } from "../types";

const useSignup = () => {
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleSignup = async (formState: SignupFormType) => {
    try {
      const { data } = await addUser({ variables: { ...formState } });
      Auth.login(data.addUser.token);
    } catch (err) {
      console.log(err);
    }
  };

  return [handleSignup, { error }] as const;
};

export default useSignup;
