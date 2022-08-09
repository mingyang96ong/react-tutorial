import React, { useReducer, useCallback, useMemo, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";
import useHttp from "../hooks/http";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Should not get there!");
  }
};

// const httpReducer = (curHttpState, action) => {
//   switch (action.type) {
//     case "SEND":
//       return { loading: true, error: null };
//     case "RESPONSE":
//       return { ...curHttpState, loading: false };
//     case "ERROR":
//       return { loading: false, error: action.errorMessage };
//     case "CLEAR":
//       return { ...curHttpState, error: null };
//     default:
//       throw new Error("Should not be reached");
//   }
// };

const Ingredients = () => {
  const [ingredients, dispatch] = useReducer(ingredientReducer, []);
  const {
    isLoading,
    error,
    data,
    sendRequest,
    reqExtra,
    reqIdentifier,
    clear,
  } = useHttp();
  // const [httpState, dispatchHttp] = useReducer(httpReducer, {
  //   loading: false,
  //   error: null,
  // });
  // const [ingredients, setIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  useEffect(() => {
    if (!isLoading && reqIdentifier === "REMOVE_INGREDIENT") {
      dispatch({ type: "DELETE", id: reqExtra });
    } else if (!isLoading && !error && reqIdentifier === "ADD_INGREDIENT") {
      dispatch({ type: "ADD", ingredient: { id: data.name, ...reqExtra } });
    }
  }, [data, reqExtra, reqIdentifier, isLoading, error]);

  const filteredIngredientHandler = useCallback((filteredIngredients) => {
    dispatch({ type: "SET", ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = useCallback(
    (ingredient) => {
      sendRequest(
        "https://react-http-6ae03-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json",
        "POST",
        JSON.stringify(ingredient),
        ingredient,
        "ADD_INGREDIENT"
      );
    },
    [sendRequest]
  );

  const removeIngredientHandler = useCallback(
    (ingredientId) => {
      sendRequest(
        `https://react-http-6ae03-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients/${ingredientId}.json`,
        "DELETE",
        null,
        ingredientId,
        "REMOVE_INGREDIENT"
      );
      // setIsLoading(true);
      // dispatchHttp({ type: "SEND" });
      // fetch(
      //   `https://react-http-6ae03-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients/${ingredientId}.json`,
      //   {
      //     method: "DELETE",
      //   }
      // )
      //   .then((response) => {
      //     // setIsLoading(false);
      //     dispatchHttp({ type: "RESPONSE" });
      //     // setIngredients((prevIngredients) => {
      //     //   return prevIngredients.filter((item) => item.id !== ingredientId);
      //     // });
      //     dispatch({ type: "DELETE", id: ingredientId });
      //   })
      //   .catch((error) => {
      //     // setError("Something went wrong!");
      //     dispatchHttp({ type: "ERROR", errorMessage: "Something went wrong!" });
      //   });
    },
    [sendRequest]
  );

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={ingredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [ingredients, removeIngredientHandler]);

  return (
    <div className="App">
      {/* {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>} */}
      {/* {httpState.error && (
        <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>
      )} */}
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      {/* <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={httpState.loading}
      /> */}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />
      <section>
        <Search onLoadIngredients={filteredIngredientHandler} />
        {/* <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredientHandler}
        /> */}
        {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;
