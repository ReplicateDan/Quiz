'use client';

import { useState } from 'react';
import Image from 'next/image';

type PersonalityKey = 'boldAdventurer' | 'cozyClassic' | 'zenMinimalist' | 'artisanSnob';

interface Personality {
  name: string;
  coffee: string;
  tagline: string;
  image: string;
}

interface Answer {
  emoji: string;
  text: string;
  personality: PersonalityKey;
}

interface Question {
  text: string;
  answers: Answer[];
}

const personalities: Record<PersonalityKey, Personality> = {
  boldAdventurer: {
    name: 'Bold Adventurer',
    coffee: 'Double Espresso',
    tagline: 'You live for intensity',
    image: '/espresso.jpg',
  },
  cozyClassic: {
    name: 'Cozy Classic',
    coffee: 'Medium Roast Drip',
    tagline: 'Comfort in every cup',
    image: '/drip-coffee.jpg',
  },
  zenMinimalist: {
    name: 'Zen Minimalist',
    coffee: 'Black Coffee',
    tagline: 'Simple. Clean. Perfect.',
    image: '/black-coffee.jpg',
  },
  artisanSnob: {
    name: 'Artisan Snob',
    coffee: 'Pour-Over, Single Origin',
    tagline: 'You know what you like',
    image: '/pour-over.jpg',
  },
};

const questions: Question[] = [
  {
    text: 'Your ideal Saturday morning looks like...',
    answers: [
      { emoji: '🏔️', text: "Up early, out the door — there's always somewhere to explore", personality: 'boldAdventurer' },
      { emoji: '🛋️', text: 'Slow start, no plans, nowhere to be', personality: 'cozyClassic' },
      { emoji: '📖', text: 'Quiet corner, book or journal, total stillness', personality: 'zenMinimalist' },
      { emoji: '🔍', text: "Checking out that new coffee spot you've been researching", personality: 'artisanSnob' },
    ],
  },
  {
    text: "When you travel, you're most likely to...",
    answers: [
      { emoji: '🎒', text: 'Book a one-way ticket and figure it out', personality: 'boldAdventurer' },
      { emoji: '🏡', text: 'Rent a cozy cottage and never leave it', personality: 'cozyClassic' },
      { emoji: '🧘', text: 'Find one beautiful place and stay there', personality: 'zenMinimalist' },
      { emoji: '🗺️', text: 'Plan an itinerary around the best local food & coffee', personality: 'artisanSnob' },
    ],
  },
  {
    text: 'Your friends would describe you as...',
    answers: [
      { emoji: '⚡', text: 'The one who suggests spontaneous road trips', personality: 'boldAdventurer' },
      { emoji: '🤗', text: 'The one whose house everyone ends up at', personality: 'cozyClassic' },
      { emoji: '🌿', text: 'The calm one who always seems at peace', personality: 'zenMinimalist' },
      { emoji: '🎯', text: 'The one with opinions about everything', personality: 'artisanSnob' },
    ],
  },
  {
    text: 'Your relationship with your phone is...',
    answers: [
      { emoji: '📸', text: 'Always out, capturing everything', personality: 'boldAdventurer' },
      { emoji: '📵', text: "Face-down, don't bother me", personality: 'cozyClassic' },
      { emoji: '🔕', text: 'On silent, obviously', personality: 'zenMinimalist' },
      { emoji: '📱', text: 'Full of niche apps and newsletters', personality: 'artisanSnob' },
    ],
  },
  {
    text: 'When you eat out, you...',
    answers: [
      { emoji: '🌶️', text: 'Order the most adventurous thing on the menu', personality: 'boldAdventurer' },
      { emoji: '🍝', text: 'Get your usual — you know what you like', personality: 'cozyClassic' },
      { emoji: '🥗', text: 'Keep it simple and clean', personality: 'zenMinimalist' },
      { emoji: '🧐', text: 'Ask the server three questions before ordering', personality: 'artisanSnob' },
    ],
  },
  {
    text: 'Your work style is...',
    answers: [
      { emoji: '🚀', text: 'Dive in, figure it out as you go', personality: 'boldAdventurer' },
      { emoji: '☕', text: 'Best with snacks, good music, no interruptions', personality: 'cozyClassic' },
      { emoji: '🎧', text: 'Deep focus, one thing at a time', personality: 'zenMinimalist' },
      { emoji: '📋', text: 'Researched, deliberate, done right', personality: 'artisanSnob' },
    ],
  },
];

const TOTAL = questions.length;

export default function Home() {
  const [view, setView] = useState<'intro' | 'quiz' | 'results'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<PersonalityKey | null>(null);
  const [scores, setScores] = useState<Record<PersonalityKey, number>>({
    boldAdventurer: 0,
    cozyClassic: 0,
    zenMinimalist: 0,
    artisanSnob: 0,
  });

  const handleStart = () => {
    setScores({ boldAdventurer: 0, cozyClassic: 0, zenMinimalist: 0, artisanSnob: 0 });
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setView('quiz');
  };

  const handleContinue = () => {
    if (!selectedAnswer) return;
    const newScores = { ...scores, [selectedAnswer]: scores[selectedAnswer] + 1 };
    setScores(newScores);
    if (currentQuestion < TOTAL - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setView('results');
    }
  };

  const progress = (currentQuestion / TOTAL) * 100;

  const sortedResults = (Object.keys(scores) as PersonalityKey[])
    .map((key) => ({
      key,
      personality: personalities[key],
      score: scores[key],
      percentage: Math.round((scores[key] / TOTAL) * 100),
    }))
    .sort((a, b) => b.percentage - a.percentage);

  return (
    <div style={{ background: '#fafafa', minHeight: '100vh' }} className="flex items-start justify-center py-16 px-4">
      <div style={{ maxWidth: '540px', width: '100%' }}>

        {/* ── INTRO ── */}
        {view === 'intro' && (
          <div className="text-center">
            <p className="text-xs text-zinc-400 uppercase tracking-widest mb-8 font-medium">
              Basecamp Rewards
            </p>
            <h1 className="text-4xl font-light text-zinc-900 mb-4 leading-tight">
              What&rsquo;s Your Coffee Personality?
            </h1>
            <p className="text-zinc-500 mb-12 text-base leading-relaxed max-w-sm mx-auto">
              6 questions. Discover which coffee matches your lifestyle — and what that says about you.
            </p>
            <button
              onClick={handleStart}
              className="bg-zinc-900 text-white px-10 py-3 rounded-sm text-sm font-medium hover:bg-zinc-700 transition-colors"
            >
              Start Quiz
            </button>
          </div>
        )}

        {/* ── QUIZ ── */}
        {view === 'quiz' && (
          <div>
            {/* Progress bar */}
            <div className="mb-10">
              <div style={{ height: '2px', background: '#e5e5e5' }}>
                <div
                  style={{
                    height: '100%',
                    width: `${progress}%`,
                    background: '#111',
                    transition: 'width 0.3s ease',
                  }}
                />
              </div>
              <p className="text-xs text-zinc-400 mt-2">
                {currentQuestion + 1} / {TOTAL}
              </p>
            </div>

            {/* Question */}
            <h2 className="text-2xl font-light text-zinc-900 mb-8 leading-snug">
              {questions[currentQuestion].text}
            </h2>

            {/* Answer options */}
            <div className="flex flex-col">
              {questions[currentQuestion].answers.map((answer) => {
                const isSelected = selectedAnswer === answer.personality;
                return (
                  <button
                    key={answer.personality}
                    onClick={() => setSelectedAnswer(answer.personality)}
                    className="flex items-center justify-between py-4 text-left border-b border-zinc-200 hover:border-zinc-400 transition-colors group"
                  >
                    <span
                      className={`flex items-center gap-3 text-base ${
                        isSelected
                          ? 'text-zinc-900 font-semibold'
                          : 'text-zinc-500 group-hover:text-zinc-800'
                      }`}
                    >
                      <span>{answer.emoji}</span>
                      <span>{answer.text}</span>
                    </span>
                    {isSelected && (
                      <span className="text-zinc-900 ml-4 flex-shrink-0 text-sm">✓</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Continue / See Results */}
            <div className="mt-8">
              <button
                onClick={handleContinue}
                disabled={!selectedAnswer}
                className={`bg-zinc-900 text-white px-8 py-3 rounded-sm text-sm font-medium transition-colors ${
                  selectedAnswer ? 'hover:bg-zinc-700' : 'opacity-30 cursor-not-allowed'
                }`}
              >
                {currentQuestion < TOTAL - 1 ? 'Continue' : 'See My Results'}
              </button>
            </div>
          </div>
        )}

        {/* ── RESULTS ── */}
        {view === 'results' && (
          <div>
            <p className="text-xs text-zinc-400 uppercase tracking-widest mb-2 font-medium">
              Your Results
            </p>
            <h2 className="text-3xl font-light text-zinc-900 mb-10 leading-tight">
              You&rsquo;re {sortedResults[0].percentage}%{' '}
              <span className="font-medium">{sortedResults[0].personality.name}</span>
            </h2>

            <div className="flex flex-col gap-6">
              {sortedResults.map((result, index) => (
                <div
                  key={result.key}
                  className={`flex gap-4 ${index === 0 ? 'items-start' : 'items-center'}`}
                >
                  {/* Coffee image */}
                  <div
                    className="flex-shrink-0 overflow-hidden rounded-sm"
                    style={{ width: index === 0 ? 80 : 56, height: index === 0 ? 80 : 56 }}
                  >
                    <Image
                      src={result.personality.image}
                      alt={result.personality.name}
                      width={index === 0 ? 80 : 56}
                      height={index === 0 ? 80 : 56}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Info + bar */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span
                        className={`font-medium text-zinc-900 ${
                          index === 0 ? 'text-base' : 'text-sm'
                        }`}
                      >
                        {result.personality.name}
                      </span>
                      {index === 0 && (
                        <span className="text-xs text-zinc-400 uppercase tracking-wide">
                          Primary
                        </span>
                      )}
                      <span
                        className={`ml-auto font-medium text-zinc-900 ${
                          index === 0 ? 'text-base' : 'text-sm'
                        }`}
                      >
                        {result.percentage}%
                      </span>
                    </div>

                    {/* Percentage bar */}
                    <div
                      style={{ height: '3px', background: '#e5e5e5', borderRadius: '9999px' }}
                      className="mb-1.5"
                    >
                      <div
                        style={{
                          height: '100%',
                          width: `${result.percentage}%`,
                          background: index === 0 ? '#111' : '#9ca3af',
                          borderRadius: '9999px',
                        }}
                      />
                    </div>

                    <p className={`text-zinc-500 ${index === 0 ? 'text-sm' : 'text-xs'}`}>
                      {result.personality.coffee} &middot; {result.personality.tagline}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button
                onClick={handleStart}
                className="text-sm text-zinc-400 hover:text-zinc-700 transition-colors underline underline-offset-4"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
