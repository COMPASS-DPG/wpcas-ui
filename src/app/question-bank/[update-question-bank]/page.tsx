'use client';

import { useEffect, useState } from 'react';

import EditableLevel from '@/components/questionBank/EditableLevel';
import QuestionUploadAndDownload from '@/components/questionBank/QuestionUploadAndDownload';
import SaveandDeleteButton from '@/components/questionBank/SaveandDeleteButton';
import SavedLevels from '@/components/questionBank/SavedLevels';
import SelectComeptency from '@/components/questionBank/SelectComeptency';
import SubHeading from '@/components/uiComponents/SubHeading';

import { useWpcasContext } from '@/app/context/WpcasContext';
import {
  FinalObjType,
  levelsWithQuestionType,
  OptionType,
} from '@/app/propTypes';
import { getAllLevels, updateItemOnServer } from '@/services/getCompetency';

const CreateQuestionBank = () => {
  const {
    levelsWithQuestion,
    setLevelsWithQuestion,
    currentCompetency,
    setViewQuestions,
  } = useWpcasContext();

  const [levelsWithoutQuestion, setLevelsWithoutQuestion] = useState<
    OptionType[]
  >([]);
  const [showSavePopUp, setShowSavePopUp] = useState<boolean>(false);
  const [showdeletePopUp, setShowdeletePopUp] = useState<boolean>(false);
  const [savedIdtoDelete, setSavedIdtoDelete] = useState<number>(0);
  const [finalObj, setFinalObj] = useState<FinalObjType>({
    createQuestions: [],
    updateQuestions: [],
    deleteQuestions: [],
  });

  // render  if the competency change
  useEffect(() => {
    if (currentCompetency == null) return;
    (async () => {
      const combinedLevels = await getAllLevels(currentCompetency);
      setLevelsWithQuestion(combinedLevels?.levelsWithQuestion);
      setLevelsWithoutQuestion(combinedLevels?.levelsWithoutQuestion);
    })();
  }, [currentCompetency, setLevelsWithQuestion]);

  //Edit question inside level
  const updateQuestioninLevel = (
    competencyLevelNumber: number,
    newQuestion: string
  ) => {
    const newQuestions = levelsWithQuestion.map(
      (item: levelsWithQuestionType) => {
        if (item.competencyLevelNumber === competencyLevelNumber) {
          return {
            ...item,
            question: newQuestion,
          };
        }
        return item;
      }
    );
    setLevelsWithQuestion(newQuestions);
  };
  //handle delete Levels
  const handleDeleteLevel = () => {
    // Find the deleted item
    const deletedItem = levelsWithQuestion.find(
      (question: levelsWithQuestionType) =>
        question.competencyLevelNumber === savedIdtoDelete
    );
    if (deletedItem?.questionPresent === true) {
      setFinalObj({
        ...finalObj,
        deleteQuestions: [...finalObj.deleteQuestions, deletedItem.questionId],
      });
    }

    // Remove the item from the questions array with competencyLevelNumber equal to savedIdtoDelete
    const updatedQuestions = levelsWithQuestion.filter(
      (question: levelsWithQuestionType) =>
        question.competencyLevelNumber !== savedIdtoDelete
    );

    // Add the deleted item back to remainingLevels
    if (deletedItem)
      setLevelsWithoutQuestion((prev) => [
        ...prev,
        {
          label: deletedItem.competencyLevelName,
          value: deletedItem.competencyLevelNumber,
        },
      ]);

    setLevelsWithQuestion(updatedQuestions);
    setShowdeletePopUp(false);
  };

  // add level function
  const handleAddLevel = (level: number | null, question: string) => {
    if (level == null || question == '') {
      return;
    }

    const newLevel = levelsWithoutQuestion.find((item) => item.value === level);

    if (newLevel?.label == undefined || newLevel.value == undefined) return;
    const updateLevelsWithQuestion: levelsWithQuestionType[] = [
      ...levelsWithQuestion,
      {
        competencyLevelNumber: level,
        competencyLevelName: newLevel?.label,
        question: question,
        questionId: Math.random() * 100000,
        questionPresent: false,
      },
    ];

    const updatedRemainingLevels = levelsWithoutQuestion.filter(
      (item) => item.value !== level
    );

    setLevelsWithoutQuestion(updatedRemainingLevels);
    setLevelsWithQuestion(updateLevelsWithQuestion);
  };
  // handle save button
  const handleSaveButton = async () => {
    for (const level of levelsWithQuestion) {
      if (level.question === '') {
        // At least one question is empty, don't proceed
        return;
      }
    }
    // Task 1: Check each deleteQuestion, remove if present in the questions array
    const filteredDeleteQuestions = finalObj.deleteQuestions.filter(
      (questionId) =>
        !levelsWithQuestion.some(
          (question) => question.questionId === questionId
        )
    );

    // Task 2: Check levelsWithQuestion array
    const createQuestions = levelsWithQuestion
      .filter((level) => !level.questionPresent)
      .map((level) => ({
        competencyId: currentCompetency || 0,
        competencyLevelNumber: level.competencyLevelNumber,
        question: level.question,
      }));

    const updateQuestions = levelsWithQuestion
      .filter((level) => level.questionPresent)
      .map((level) => ({
        questionId: level.questionId,
        question: level.question,
      }));

    const updatedFinalObj = {
      createQuestions,
      updateQuestions,
      deleteQuestions: filteredDeleteQuestions,
    };
    setViewQuestions(false);
    updateItemOnServer(updatedFinalObj, setShowSavePopUp);
  };

  return (
    <div className='mx-[30px] gap-1 bg-white p-5'>
      {/* Upload and download section */}
      <QuestionUploadAndDownload />
      {/* select Competency dropdown */}
      <SelectComeptency />
      {/*all levels with question*/}
      {currentCompetency && <SubHeading heading='Add Level & Questions' />}
      {levelsWithQuestion.map((question: levelsWithQuestionType) => {
        return (
          <SavedLevels
            key={question.competencyLevelName}
            completeLevel={question}
            setSavedIdtoDelete={setSavedIdtoDelete}
            showdeletePopUp={showdeletePopUp}
            setShowdeletePopUp={setShowdeletePopUp}
            handleDeleteLevel={handleDeleteLevel}
            updateQuestioninLevel={updateQuestioninLevel}
          />
        );
      })}
      {currentCompetency && (
        <>
          {/* editable levels */}
          <EditableLevel
            levelsWithoutQuestion={levelsWithoutQuestion}
            handleAddLevel={handleAddLevel}
          />
          {/* save and delete button */}
          <SaveandDeleteButton
            handleSaveButton={handleSaveButton}
            showSavePopUp={showSavePopUp}
            setShowSavePopUp={setShowSavePopUp}
          />
        </>
      )}
    </div>
  );
};
export default CreateQuestionBank;
