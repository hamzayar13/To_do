export const initialState = {
  list: [],
  subject: "",
  description: "",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "NEW-ITEM": {
      const { subject, description } = action.payload;
      if (subject.trim() === "" || description.trim() === "") return state;

      const newItem = {
        id: Date.now() + Math.random(),
        subject,
        description,
      };
      return {
        ...state,
        list: [...state.list, newItem],
        subject: "",
        description: "",
      };
    }
    case "DELETE-ITEM": {
      return {
        ...state,
        list: state.list.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    }
    case "SET-SUBJECT": {
      return {
        ...state,
        subject: action.payload,
      };
    }
    case "SET-DESCRIPTION": {
      return {
        ...state,
        description: action.payload,
      };
    }
    default:
      return state;
  }
};
