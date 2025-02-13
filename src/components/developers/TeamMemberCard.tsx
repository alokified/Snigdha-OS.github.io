import { motion } from 'framer-motion';
import { MapPin, Users, Book } from 'lucide-react';
import type { GithubUser } from '../../lib/github';

interface TeamMemberCardProps {
  user: GithubUser;
  role: string;
  description: string;
}

export function TeamMemberCard({ user, role, description }: TeamMemberCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-gray-200"
    >
      <div className="flex items-start gap-4">
        <img
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{user.name || user.login}</h3>
          <p className="text-sm text-cornflower-blue">{role}</p>
          {user.location && (
            <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
              <MapPin className="h-4 w-4" />
              <span>{user.location}</span>
            </div>
          )}
        </div>
      </div>

      <p className="mt-4 text-gray-600">{description}</p>
      
      <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Users className="h-4 w-4" />
          <span>{user.followers.toLocaleString()} followers</span>
        </div>
        <div className="flex items-center gap-1">
          <Book className="h-4 w-4" />
          <span>{user.public_repos} repos</span>
        </div>
      </div>
      
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center text-sm text-cornflower-blue hover:underline"
      >
        View GitHub Profile →
      </a>
    </motion.div>
  );
}