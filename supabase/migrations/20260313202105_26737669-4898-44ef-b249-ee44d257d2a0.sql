
CREATE TABLE public.agents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  short_description TEXT NOT NULL,
  category TEXT NOT NULL,
  creator TEXT NOT NULL,
  creator_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  avatar_url TEXT DEFAULT '',
  rating NUMERIC(2,1) NOT NULL DEFAULT 0,
  users_count INTEGER NOT NULL DEFAULT 0,
  tags TEXT[] NOT NULL DEFAULT '{}',
  pricing TEXT NOT NULL DEFAULT 'free' CHECK (pricing IN ('free', 'freemium', 'paid')),
  demo_url TEXT,
  github_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.agents ENABLE ROW LEVEL SECURITY;

-- Anyone can read agents
CREATE POLICY "Anyone can view agents" ON public.agents FOR SELECT USING (true);

-- Authenticated users can insert their own agents
CREATE POLICY "Authenticated users can insert agents" ON public.agents FOR INSERT TO authenticated WITH CHECK (auth.uid() = creator_id);

-- Creators can update their own agents
CREATE POLICY "Creators can update own agents" ON public.agents FOR UPDATE TO authenticated USING (auth.uid() = creator_id) WITH CHECK (auth.uid() = creator_id);

-- Creators can delete their own agents
CREATE POLICY "Creators can delete own agents" ON public.agents FOR DELETE TO authenticated USING (auth.uid() = creator_id);
