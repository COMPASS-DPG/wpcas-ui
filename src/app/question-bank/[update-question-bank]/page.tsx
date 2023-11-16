'use client';

import { useEffect, useState } from 'react';

import Popup2 from '@/components/DeleteLevelPopUp';
import EditableLevel from '@/components/questionBank/EditableLevel';
import QuestionUploadAndDownload from '@/components/questionBank/QuestionUploadAndDownload';
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

import Delete from '~/svg/delete.svg';

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
  const [loading, setLoading] = useState<boolean>(false);

  // render  if the competency change
  useEffect(() => {
    if (currentCompetency == null) return;
    setLoading(true);
    (async () => {
      const combinedLevels = await getAllLevels(currentCompetency, setLoading);
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
        questionId: parseFloat(Date.now() + '.1'),
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
  const handleSaveButton = async (level: number | null, question: string) => {
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
    //add current question present in editable section
    if (level != null && question !== '') {
      createQuestions.push({
        competencyId: currentCompetency || 0,
        competencyLevelNumber: level,
        question: question,
      });
    }

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
      <Popup2
        popUpIcon={<Delete width='60' />}
        popUpClosingFunction={setShowdeletePopUp}
        handleDeleteButton={handleDeleteLevel}
        visible={showdeletePopUp}
        topHeading='Are you sure'
        subHeading='Do you want to delete this competency level?   '
        LeftButtonText='No'
        rightButtonText='Yes'
      />
      {/* Upload and download section */}
      <QuestionUploadAndDownload />
      {/* select Competency dropdown */}
      <SelectComeptency />
      {/*all levels with question*/}
      {currentCompetency && (
        <SubHeading
          heading={loading ? 'Loading....' : 'Add Level & Questions'}
        />
      )}
      {levelsWithQuestion.map((question: levelsWithQuestionType) => {
        return (
          <SavedLevels
            key={question.competencyLevelName}
            completeLevel={question}
            setSavedIdtoDelete={setSavedIdtoDelete}
            setShowdeletePopUp={setShowdeletePopUp}
            updateQuestioninLevel={updateQuestioninLevel}
          />
        );
      })}
      {currentCompetency && !loading && (
        <>
          {/* editable levels, save and delete button section */}
          <EditableLevel
            levelsWithoutQuestion={levelsWithoutQuestion}
            handleAddLevel={handleAddLevel}
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
