export type FinalObjType = {
  createQuestions: {
    competencyId: number;
    competencyLevelNumber: number;
    question: string;
  }[];
  updateQuestions: {
    questionId: number;
    question: string;
  }[];
  deleteQuestions: number[];
};

export type OptionType = {
  label: string;
  value: string | number;
};

export type levelsWithQuestionType = {
  competencyLevelNumber: number;
  competencyLevelName: string;
  question: string;
  questionId: number;
  questionPresent: boolean;
};
