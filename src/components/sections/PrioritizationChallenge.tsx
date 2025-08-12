
"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Check, Repeat, Zap, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Feature {
  id: number;
  title: string;
  description: string;
  impact: number;
  effort: number;
}

const allFeatures: Feature[] = [
  { id: 1, title: 'Critical Bug Fix', description: 'Resolve a major checkout issue causing a 15% drop in conversions.', impact: 10, effort: 3 },
  { id: 2, title: 'Implement Dark Mode', description: 'A highly requested UI feature to improve user comfort in low-light settings.', impact: 4, effort: 5 },
  { id: 3, title: 'New Payment Gateway', description: 'Integrate a new payment provider to expand into international markets.', impact: 8, effort: 8 },
  { id: 4, title: 'Improve Onboarding Flow', description: 'Redesign the first-time user experience to increase activation rate by 5%.', impact: 7, effort: 6 },
  { id: 5, title: 'AI-Powered Recommendations', description: 'Develop a new AI engine to provide personalized content suggestions.', impact: 9, effort: 10 },
  { id: 6, title: 'Refactor Legacy Code', description: 'Update an old part of the codebase to improve performance and developer velocity.', impact: 5, effort: 7 },
  { id: 7, title: 'Add Social Sharing', description: 'Allow users to share their achievements on social media to drive organic growth.', impact: 6, effort: 4 },
  { id: 8, title: 'Update User Profile Page', description: 'A minor visual refresh of the user profile page.', impact: 2, effort: 2 },
];

const SPRINT_POINT_BUDGET = 15;

export function PrioritizationChallenge() {
  const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([]);
  const [gameState, setGameState] = useState<'playing' | 'finished'>('playing');

  const { totalEffort, totalImpact } = useMemo(() => {
    return selectedFeatures.reduce(
      (acc, feature) => {
        acc.totalEffort += feature.effort;
        acc.totalImpact += feature.impact;
        return acc;
      },
      { totalEffort: 0, totalImpact: 0 }
    );
  }, [selectedFeatures]);

  const toggleFeature = (feature: Feature) => {
    if (gameState === 'finished') return;

    const isSelected = selectedFeatures.some(f => f.id === feature.id);

    if (isSelected) {
      setSelectedFeatures(prev => prev.filter(f => f.id !== feature.id));
    } else {
      if (totalEffort + feature.effort <= SPRINT_POINT_BUDGET) {
        setSelectedFeatures(prev => [...prev, feature]);
      }
    }
  };
  
  const resetGame = () => {
    setSelectedFeatures([]);
    setGameState('playing');
  };

  const finishSprint = () => {
    setGameState('finished');
  };
  
  const getScoreMessage = () => {
    if (totalImpact > 20) return "Excellent work! You've delivered massive value and demonstrated strong strategic thinking.";
    if (totalImpact > 15) return "Great job! A solid sprint with a good balance of impact and effort.";
    if (totalImpact > 10) return "A good result. You made some valuable choices, but could there have been a higher-impact combination?";
    return "A solid effort. Prioritization is tough! Try again to see if you can maximize your impact score.";
  };

  return (
    <section id="prioritization-challenge" className="w-full py-20 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">The Prioritization Challenge</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            You're the Product Manager. You have <span className="font-bold text-primary">{SPRINT_POINT_BUDGET} effort points</span> for the next sprint. Choose the features that will deliver the most value.
          </p>
        </div>

        <motion.div 
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-12 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
          {/* Left Column: Feature Backlog */}
          <div className="lg:col-span-7">
            <h3 className="text-xl font-bold mb-4">Feature Backlog</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {allFeatures.map(feature => {
                const isSelected = selectedFeatures.some(f => f.id === feature.id);
                const isOverBudget = totalEffort + feature.effort > SPRINT_POINT_BUDGET && !isSelected;
                
                return (
                  <Card 
                    key={feature.id} 
                    className={cn(
                        "transition-all duration-300", 
                        isSelected ? "border-primary shadow-lg" : "border-border",
                        isOverBudget && gameState === 'playing' ? "bg-muted/50 opacity-60" : "",
                        gameState === 'finished' && !isSelected ? "opacity-50" : ""
                    )}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground h-16">{feature.description}</p>
                      <div className="flex justify-between text-sm">
                        <Badge variant="outline" className="flex items-center gap-1"><Star className="h-3 w-3 text-yellow-400"/> Impact: {feature.impact}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1"><Zap className="h-3 w-3 text-red-400"/> Effort: {feature.effort}</Badge>
                      </div>
                      <Button 
                        size="sm"
                        className="w-full"
                        variant={isSelected ? "secondary" : "default"}
                        onClick={() => toggleFeature(feature)}
                        disabled={isOverBudget || gameState === 'finished'}
                      >
                        {isSelected ? <Minus className="mr-2 h-4 w-4"/> : <Plus className="mr-2 h-4 w-4"/>}
                        {isSelected ? 'Remove' : 'Add to Sprint'}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sprint Plan */}
          <div className="lg:col-span-5 sticky top-24 h-fit">
             <Card className="shadow-xl bg-background/70 backdrop-blur-lg">
                <CardHeader>
                    <CardTitle>Your Sprint Plan</CardTitle>
                    <CardDescription>Review your selected features and total scores.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1 text-sm font-medium">
                        <span>Effort Points Used</span>
                        <span>{totalEffort} / {SPRINT_POINT_BUDGET}</span>
                      </div>
                      <Progress value={(totalEffort / SPRINT_POINT_BUDGET) * 100} />
                    </div>

                    <div className="flex items-baseline justify-center gap-2 rounded-lg bg-secondary/50 p-4">
                        <span className="text-sm text-muted-foreground">Total Impact Score:</span>
                        <p className="text-4xl font-bold text-primary">{totalImpact}</p>
                    </div>

                    <div className="min-h-[150px] space-y-2">
                        <AnimatePresence>
                        {selectedFeatures.length > 0 ? selectedFeatures.map(f => (
                           <motion.div
                                key={f.id}
                                layout
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                                className="flex justify-between items-center text-sm p-2 rounded-md bg-secondary"
                            >
                                <span>{f.title}</span>
                                <span className="font-semibold">{f.impact} pts</span>
                           </motion.div>
                        )) : (
                            <div className="flex items-center justify-center h-full pt-8 text-sm text-muted-foreground">
                                Add features from the backlog.
                            </div>
                        )}
                        </AnimatePresence>
                    </div>

                    {gameState === 'playing' ? (
                         <Button className="w-full" onClick={finishSprint} disabled={selectedFeatures.length === 0}>
                            Finish Sprint <Check className="ml-2 h-4 w-4"/>
                        </Button>
                    ) : (
                        <Card className="p-4 bg-background text-center">
                            <h4 className="font-bold text-lg text-primary">Sprint Complete!</h4>
                            <p className="text-sm text-muted-foreground mt-2">{getScoreMessage()}</p>
                        </Card>
                    )}
                    <Button className="w-full" variant="outline" onClick={resetGame}>
                        Start Over <Repeat className="ml-2 h-4 w-4"/>
                    </Button>
                  </div>
                </CardContent>
             </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
