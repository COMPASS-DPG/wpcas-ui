'use client';
import { createContext, useContext, useEffect, useState } from 'react';

import { levelsWithQuestionType, OptionType } from '@/app/propTypes';
import { getCompetency } from '@/services/getCompetency';

interface WpcasContextValue {
  competencyArray: OptionType[];
  levelsWithQuestion: levelsWithQuestionType[];
  setLevelsWithQuestion: (levels: levelsWithQuestionType[]) => void;
  currentCompetency: number | null;
  setCurrentCompetency: (are: number | null) => void;
  viewQuestions: boolean;
  setViewQuestions: (val: boolean) => void;
  currentLevelsAnsQuestions: levelsWithQuestionType[];
  setCurrentLevelsAndQuestions: (levels: levelsWithQuestionType[]) => void;
}

const WpcasProvider = createContext<WpcasContextValue>({
  competencyArray: [],
  levelsWithQuestion: [],
  setLevelsWithQuestion: () => null,
  currentCompetency: null,
  setCurrentCompetency: () => null,
  viewQuestions: false,
  setViewQuestions: () => null,
  currentLevelsAnsQuestions: [],
  setCurrentLevelsAndQuestions: () => null,
});

// const WpcasProvider = createContext('');

const WpcasContext = ({ children }: { children: React.ReactElement }) => {
  const [levelsWithQuestion, setLevelsWithQuestion] = useState<
    levelsWithQuestionType[]
  >([]);
  const [competencyArray, setCompetencyArray] = useState<OptionType[]>([]);
  const [currentCompetency, setCurrentCompetency] = useState<number | null>(
    null
  );
  const [viewQuestions, setViewQuestions] = useState<boolean>(false);
  const [currentLevelsAnsQuestions, setCurrentLevelsAndQuestions] = useState<
    levelsWithQuestionType[]
  >([]);

  useEffect(() => {
    (async () => {
      const option = await getCompetency();
      setCompetencyArray(option);
    })();
  }, []);

  return (
    <WpcasProvider.Provider
      value={{
        competencyArray,
        levelsWithQuestion,
        setLevelsWithQuestion,
        currentCompetency,
        setCurrentCompetency,
        viewQuestions,
        setViewQuestions,
        currentLevelsAnsQuestions,
        setCurrentLevelsAndQuestions,
      }}
    >
      {children}
    </WpcasProvider.Provider>
  );
};

export const useWpcasContext = () => useContext(WpcasProvider);
export default WpcasContext;
